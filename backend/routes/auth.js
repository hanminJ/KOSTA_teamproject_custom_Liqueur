// 인증구현 라우터
var express = require('express')
, router = express.Router()
, passport = require('passport')
, session = require('express-session')
, NaverStrategy = require('passport-naver').Strategy;
const cors = require('cors');
var authCheck = require('./authCheck.js');


const db   = require('../config/database');


passport.serializeUser(function(user, done) { //인증 요청 이후 세션기록
	done(null, user);
});

passport.deserializeUser(function(user, done) { //세션기록 얻어옴
	done(null, user);
});


passport.use(new NaverStrategy({
    clientID: 'UkNsTI7sArBNgz5e9mWw',
    clientSecret: 'uWxCS6M9tH',
    callbackURL: 'http://localhost:8080/callback'
},
function(accessToken, refreshToken, profile, done) {
  var provider_id=profile._json.id;
  console.log('id값 : ',provider_id)

    db.query('SELECT * from user where provider_id =?',[provider_id], (error, results, fields) => {
      console.log('results값 확인',results)
      if (results[0]) {   // db에서의 반환값이 있으면 로그인 성공
        console.log('db에 값이 있을때')
        var user = results[0];
        return done(null, user); // 등록된 사용자 정보가 존재할 경우
      }
      else{
        console.log('db에 값이 없을때')
        return done(null, false, profile);}
   })
 // 등록된 사용자 정보가 존재하지 않을 경우, 클라이언트에 사용자 정보를 전달해주기 위해 세번째 인자로 사용자 정보를 넣어준다.    
 
}
)
);

router.get('/auth/naver',
passport.authenticate('naver', null), function(req, res) {
    console.log('/auth/naver failed, stopped');
});


router.get('/callback', (req, res, next)=>{
passport.authenticate('naver', (err, user,profile) => { // passport-naver 전략 done 함수의 파라미터가 여기 콜백 함수의 인자로 전달된다.

if (!user) { 
// 등록된 회원 정보가 없을 경우 profile 파라미터에 전달된 사용자 정보를 이용해 세션을 생성한다.
console.log('user없을때 ',profile)
req.session.joinUser = {
  email: profile._json.email,
  id: profile._json.id,
  age: profile._json.birth,
};
return req.session.save(() => {
  // 세션이 생성되면 사용자를 회원가입 페이지로 리다이렉트 시킨다.
  res.redirect(`http://localhost:3000/signup`);
});
}
else
{
  console.log('user있을때 ',user)
  return req.login(user, (error) => {
  if (error) {
    next(error);
  }
  req.session.is_logined = true;
  req.session.user_id = user.user_id;
  req.session.save(function () {
      res.redirect(`http://localhost:3000/home`);
  });
  
  });
}
// 회원가입된 상태일 경우, 로그인 세션을 생성한다.
  
})(req, res, next); // 미들웨어 내의 미들웨어에는 호출 별도로 진행
});

router.get('/logout', function (req, res) {
  
  if(req.session.user_id){
    req.session.destroy(function(err){ //req.session.destroy 메소드: session 삭제 메소드
        if(err){
            console.log(err);
        }else{
          res.clearCookie('sid')
          res.send("접속 O")
            res.redirect('http://localhost:3000/home'); // logout 해서 session 삭제완료 되면 에러가 나지 않았을 경우 main 페이지로 redirect
        }
    })
}else{
    res.redirect('http://localhost:3000/home');
}
    // req.session.destroy(function (err) {
    //   
    //   res.send("성공")
    //     res.redirect('http://localhost:3000/home');
    // });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}



// 회원가입 프로세스 아직 미완료
router.post('/signup', function(req, res) {    
    console.log('signup :세션' , req.session.joinUser)
    var email = req.session.joinUser.email;
    var id = req.session.joinUser.id;   
    var age = req.session.joinUser.age;
    var nickname = req.body.nickname;
    var adress = req.body.adress;
    var P_number = req.body.number;
  
    if (adress && P_number && nickname) {
        db.query('INSERT INTO user (email, birth,nickname,provider_id,adress,P_number) VALUES(?,?,?,?,?,?)', [email, age,nickname, id,adress,P_number], function (error, data) {
                    res.redirect('http://localhost:3000/home')
                });
            } 

    else {        // 입력되지 않은 정보가 있는 경우
    }
});

router.get('/authcheck',function(req,res){

  if (req.session.user_id) {
    
    return res.send('true');
  } else {
    return res.send('false');
  }
})

module.exports = router;