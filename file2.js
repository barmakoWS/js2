function b(q){
  db.query(q)
}
var x=[];
x[0] = b
z = x[0]
 

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

  return z(q);
});
