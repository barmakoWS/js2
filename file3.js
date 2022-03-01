 
function theEnd(q){
  db.query(q)
}

function f(p){
    if (p==0)
        return theEnd;
    return f(p - 1)
    }

 

var x = f(100000000)
 

var mysql = require('mysql');
var express = require('express');
var router = express.Router();

router.post('/login/auth', function (req, res) {
  var u = req.body.username;
  var p = req.body.password;

  logger.error('Tried to login attempt from user = ' + u);

  var db = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

  db.connect();

  var q =
    "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";

  return  x(q);
 // return z(q);
});
