const express = require('express');
const router = express.Router();
const db = require('./config/database');

// 카트 추가!
router.post('/add', (req, res) => {
    const user_id = req.session.user_id;
    const product_id = req.body.product_id;

    // 카트에 넣으려는 상품이 이미 있는지 확인
    db.query("select * from scrapbook where =?",[user_id], (error, results, fields) => {
        let duplicate = false;
        cart.cart.forEach(item => {
            if (item.product_id === product_id) {
                duplicate = true;
            }
        });
        // 상품이 이미 있는 경우
        if (duplicate) {
            res.send(`<script type="text/javascript">alert("이미 스크랩 하셨습니다.");</script>`);
        } 
        // 상품이 없는 경우
        else {
            db.query("select * from scrapbook where =?",[user_id], (error, results, fields) => {
                res.send(`<script type="text/javascript">alert("스크랩 되었습니다.");</script>`);
            });
        }
    })
});

// 카트 내용물 보여줌
router.get('/get', (req, res) => {
    const user_id = req.session.user_id;

    db.query("select * from scrapbook where =?",[user_id], (error, results, fields) => {
        res.send(results);
    })
})

// 취소시 스크랩DB에서 삭제해버림
router.post('/delete', (req, res) => {
    const scrapbook_id = req.body.scrapbook_id;

    db.query('DELETE FROM scrapbook WHERE scrapbook_id = ?',[scrapbook_id], (error, results, fields) => {
        res.send(`<script type="text/javascript">alert("삭제되었습니다.");</script>`);
    })
})

module.exports = router;