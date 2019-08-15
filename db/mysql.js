const mysql  = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'students',
  database : 'donutsareawesome'
});

module.exports = connection;

