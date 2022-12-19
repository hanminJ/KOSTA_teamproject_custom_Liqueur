const express = require('express');
const router = express.Router();
const db = require('./config/database');

//펀딩 페이지  - 모든 상품들 받아옴
router.get('/get', (req, res) => {
    db.query("select * from product", (error, results, fields) => {
      res.send(results);
   })
    })

//펀딩 상세페이지    
router.get('/get_by_id', (req, res) => {
    //product_id를 이용해 DB에서 같은 id를 가진 정보를 가져온다
      var product_id = req.body.product_id;
      db.query("select * from product where =?",[product_id], (error, results, fields) => {
        res.send(results);});
      })


module.exports = router;
