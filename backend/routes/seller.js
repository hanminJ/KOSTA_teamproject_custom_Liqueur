const express = require('express');
const router = express.Router();
const db = require('../config/database');


// seller 추가 등록 - 사업자 등록증으로 확인
router.post('/register', (req, res) => {
    const registration_num = req.body.registration_num;
    const user_id =req.body.user_id;
    const company_name =req.body.company_name;
    const representative =req.body.representative;
    const address =req.body.address;
    const email =req.body.email;
    const customer_center =req.body.customer_center;

    db.query("select * from seller where =?",[registration_num], (error, results, fields) => {
        if (results) {
            return res.send(`<script type="text/javascript">alert("이미 존재하는 판매자입니다.");</script>`);
            }
        
            else{
                db.query('INSERT INTO order (user_id, company_name,representative,address,email,customer_center,registration_num) VALUES(?,?,?,?,?,?,?)', [user_id, company_name,representative,address,email,customer_center,registration_num], function (error, data) {
                    if(error) console.log(error);
                    return res.send(`<script type="text/javascript">alert("등록되었습니다.");</script>`);
                })
            }
        
    });
})

module.exports = router;