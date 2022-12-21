const express = require('express');
const router = express.Router();
const db = require('../config/database');

//펀딩 페이지  - 모든 상품들 받아옴
router.get('/all', (req, res) => {
    db.query("select * from product", (error, results, fields) => {
      res.send(results);
   })
    })
router.get('/trending', (req, res) => {
    db.query("select * from product order by created_at DESC limit 0, 4", (error, results, fields) => {
        res.send(results);
    })
    })
router.get('/hotsale', (req, res) => {
    db.query("select * from product order by funding_sum DESC limit 0, 4", (error, results, fields) => {
         res.send(results);
    })
    })
router.get('/hotsale', (req, res) => {
    db.query("select * from product order by funding_sum DESC limit 0, 4", (error, results, fields) => {
          res.send(results);
      })
      })
router.get('/hotsale', (req, res) => {
    db.query("select * from product order by funding_sum DESC limit 0, 4", (error, results, fields) => {
          res.send(results);
        })
        })

//펀딩 상세페이지    
router.get('/get_by_id/:id', (req, res) => {
    //product_id를 이용해 DB에서 같은 id를 가진 정보를 가져온다
  
  let {product_id} = req.query;
  console.log(product_id)
      db.query("select * from product where product_id=?",[product_id], (error, results, fields) => {

        res.send(results);});
      })


      module.exports = router;