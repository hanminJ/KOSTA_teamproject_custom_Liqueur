const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'teamproject',
  port : '3306'
});


// host     : 'database-1.ciqrb9g8upg3.ap-northeast-2.rds.amazonaws.com',
// user     : 'admin',
// password : 'ELECjung',
// database : 'teamproject',
// port : '3306'

module.exports = db