// 인증구현 라우터
var express = require('express')
, router = express.Router()
, passport = require('passport')
, session = require('express-session')
, NaverStrategy = require('passport-naver').Strategy;

const db   = require('../config/database');


passport.serializeUser(function(user, done) { //인증 요청 이후 세션기록
	done(null, user);
});

passport.deserializeUser(function(obj, done) { //세션기록 얻어옴
	done(null, obj);
});


passport.use(new NaverStrategy({
    clientID: 'UkNsTI7sArBNgz5e9mWw',
    clientSecret: 'uWxCS6M9tH',
    callbackURL: 'http://localhost:8080/callback'
},
function(accessToken, refreshToken, profile, done) {
  console.log(profile._json.id)
  let provider_id = profile._json.id;
  db.query('SELECT * from user where provider_id =?',[provider_id], (error, results, fields) => {

    if (error) throw error;
    if (results) {   // db에서의 반환값이 있으면 로그인 성공
      var user = results;
      return done(null, user); // 등록된 사용자 정보가 존재할 경우
    }   
    else {
      return done(null, false, profile); 
    }  // 등록된 사용자 정보가 존재하지 않을 경우, 클라이언트에 사용자 정보를 전달해주기 위해 세번째 인자로 사용자 정보를 넣어준다.    
 })
}
)
);

router.get('/auth/naver',
passport.authenticate('naver', null), function(req, res) {
    console.log('/auth/naver failed, stopped');
});


router.get('/callback', (req, res, next)=>{
passport.authenticate('naver', (err, user,profile) => { // passport-naver 전략 done 함수의 파라미터가 여기 콜백 함수의 인자로 전달된다.
if (err) {
return next(err);
}

if (!user) { 
// 등록된 회원 정보가 없을 경우 profile 파라미터에 전달된 사용자 정보를 이용해 세션을 생성한다.
req.session.joinUser = {
  email: profile._json.email,
  nickname: profile._json.nickname,
  age: profile._json.age,
  id: profile._json.id,
};
return req.session.save(() => {
  // 세션이 생성되면 사용자를 회원가입 페이지로 리다이렉트 시킨다.
  res.redirect(`/register`);
});
}

// 회원가입된 상태일 경우, 로그인 세션을 생성한다.
return req.login(user, (error) => {
if (error) {
  next(error);
}

req.session.is_logined = true;
req.session.user_id = user[0].user_id;

req.session.save(function () {

    res.redirect(`/`);
});

});
})(req, res, next); // 미들웨어 내의 미들웨어에는 호출 별도로 진행
});

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/main');
    });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}



// 회원가입 프로세스 아직 미완료
router.post('/register', function(req, res) {    
    var email = req.session.joinUser.email;
    var id = req.session.joinUser.id;   
    var age = req.session.joinUser.age;
    var nickname = req.session.joinUser.nickname;

    if (email && birth && nickname) {
        db.query('INSERT INTO user (email, age,nickname,provider_id) VALUES(?,?,?)', [email, age,nickname, id], function (error, data) {
                    if (error) throw error2;
                        res.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다! 다시 로그인해주세요");</script>`);
                        res.redirect("/");
                    
                });
            } 

    else {        // 입력되지 않은 정보가 있는 경우
        res.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); </script>`);
    }
});

module.exports = router;