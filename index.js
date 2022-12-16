const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)
const cors = require('cors');
var authRouter = require('./routes/auth');
var authCheck = require('./routes/authCheck.js');
var template = require('./routes/template.js');
const db = require('./config/database');

const app = express()
const port = 8080


const server = require('http').createServer(app);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// Setting the naver oauth routes.
app.use(session({
  secret: 'keyboard cat',
resave: true,
proxy: true,
saveUninitialized: true
}));

// 인증 라우터
app.use('/', authRouter);

app.get('/', (req, res) => {
  db.query("select * from product", (error, results, fields) => {
    res.send(results);
 })
  })


  app.get('/shop', (req, res) => {
    db.query("select * from product", (error, results, fields) => {
      res.send(results);
   })
    })



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
