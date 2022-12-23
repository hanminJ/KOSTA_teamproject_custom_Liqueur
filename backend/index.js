const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)
const cors = require('cors');

var authRouter = require('./routes/auth');
var authCheck = require('./routes/authCheck.js');
var inquiry = require('./routes/QnA(inquiry).js');
var product = require('./routes/product.js');
var order = require('./routes/order.js');
var scarpbook = require('./routes/scarpbook.js');
var review = require('./routes/review.js');

const db = require('./config/database');

const app = express()
const port = 8080


const server = require('http').createServer(app);

app.use(cors({
  origin: "http://localhost:3000", // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));

app.use(bodyParser.urlencoded({ extended: false }));

// Setting the naver oauth routes.
app.use(session({
  secret: 'keyboard cat',
resave: true,
proxy: true,
saveUninitialized: true,
store: new FileStore
}));

// 인증 라우터
app.use('/', authRouter);//네이버 인증

app.use('/products',product); 
app.use('/scarpbook',scarpbook)
app.use('/order',order)
app.use('/inquiry',inquiry)
app.use('/review',review)


  server.listen(8080, ()=>{
    console.log('server is running on 8080')
  })

// if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
//   res.redirect('/auth/naver');
//   return false;
// } else {                                      // 로그인 되어있으면 메인 페이지로 이동시킴
//   var html = template.HTML('Welcome',
//   `<hr>
//       <h2>메인 페이지에 오신 것을 환영합니다</h2>
//       <p>로그인에 성공하셨습니다.</p>`,
//   authCheck.statusUI(req, res)
// );
// res.send(html);
// }
