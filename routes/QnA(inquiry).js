const express = require('express');
const router = express.Router();
const db = require('./config/database');

//QnA 댓글 작성 - 구매여부 및 비밀글 체크, 대답여부는 컬럼제거
router.post('/inquiry', function(req, res) {    
    var user_id = req.body.user_id;
    var product_id = req.body.product_id;    
    var seller_id = req.body.seller_id;
    var content = req.body.content;
    

    if (user_id && product_id && seller_id & content) {
        db.query('INSERT INTO inquiry (user_id, product_id,seller_id,content) VALUES(?,?,?,?)', [user_id, product_id,seller_id,content], function (error, data) {
            if(error) console.log(error);
            else{res.send(`<script type="text/javascript">alert("QnA 작성이 완료되었습니다!");</script>`);}
            });
            } 

    else {        
        res.send(`<script type="text/javascript">alert("내용을 입력해주세요.");</script>`);
    }
});

//QnA 받아오기 -세션의 user_id값과 일치시에 볼수 있게끔 만듬
router.get('/inquiry', (req, res) => {
    var user_id =req.session.user_id
    db.query("select * from inquiry where user_id = ?",[user_id], (error, results, fields) => {
    res.send(results);
    });
});

//QnA 받아오기 -어드민 페이지 세션의 seller_id 일치시에 볼수 있게끔 만듬
router.get('/admin', (req, res) => {
    var user_id =req.session.seller_id
    db.query("select * from inquiry where seller_id = ?",[seller_id], (error, results, fields) => {
    res.send(results);
    });
});


module.exports = router;