const express = require('express');
/*
const passport      = require('passport'); 
const cookieParser  = require('cookie-parser');
const session       = require('express-session');
const PassportLocal = require('passport-local').Strategy;
*/
/*
username = doadmin
password = s4FYsEIGDNF4FSe6 hide
host = db-resultados-do-user-10689106-0.b.db.ondigitalocean.com
port = 25060
database = defaultdb
sslmode = REQUIRED
*/

const mysql = require('mysql2');     

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'mli',
    password : 'R0joc3rez@',
    database : 'defaultdb'
  });

  connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
});


var path    = require('path');
const app = express();
var http    = require('http').Server(app);
app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs' );
//app.engine('ejs',require('ejs').__express);
app.get('/resultados', (req,res)=>{
    res.render('index');
    //console.log(path);
    
});
app.listen(3000);
console.log('server using port 7000');