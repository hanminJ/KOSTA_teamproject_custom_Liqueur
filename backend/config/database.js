const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'teamproject1',
  port : '3306'
});

module.exports = db