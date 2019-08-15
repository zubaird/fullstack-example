// bring in dependencies
const express = require('express');
const app = express();


const mysql  = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'YOUR PASSWORD',
  database : 'donutsareawesome'
});


connection.connect();

app.use(express.static('public'))


// some route
app.get('/donuts', (req,res)=>{
    connection.query('SELECT * FROM donuts;', function (error, results, fields) {
        res.send(results);
    });
})



// listen on a port
app.listen(3000,()=>{
    console.log('booyah! from the server');
})