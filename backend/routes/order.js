const express = require('express');
const router = express.Router();
const db = require('../config/database');

// 구매시 status =1로 구매 표시 , price 컬럼 추가
router.post('/buy', (req, res) => {
    var product_id =req.body.product_id;
    var user_id =req.session.user_id;
    var seller_id =req.body.seller_id;
    var quantity =req.body.quantity;
    var price =req.body.price;

    db.query('INSERT INTO order (product_id, user_id,seller_id,quantity,status,price) VALUES(?,?,?,?,1,?)', [product_id, user_id,seller_id,quantity,price], function (error, data) {
        if(error) console.log(error);

        })

  })
  //취소시 status = 0으로 표시 
  router.post('/cancel', (req, res) => {
    var order_id =req.body.order_id;
    db.query('update order set status = 0 where ordr_id = ?', [order_id], function (error, data) {
        if(error) console.log(error);
        })

  })
//주문 목록 가져오기
  router.get('/get', (req, res) => {
    var user_id =req.session.user_id;
    db.query("select * from order where user_id=?",[user_id], (error, results, fields) => {
        res.send(results);
  })
})


module.exports = router;