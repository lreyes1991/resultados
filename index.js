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
/*
const mysql = require('mysql2');     

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'R0joc3rez@',
    database : 'SGI_ROCHEGT'
  });

  connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
});

*/
const mysql = require('mysql2');     
var mysql_config = {
    host     : 'localhost',
    user     : 'root',
    password : 'R0joc3rez@',
    database : 'SGI_ROCHEGT'
};
var connection=null;
function handleDisconnection() {
    connection = mysql.createConnection(mysql_config);
   console.log('trying...')
    connection.connect(function(err) {
        if(err) {
            setTimeout('handleDisconnection()', 2000);
        }
    });

    connection.on('error', function(err) {
        logger.error('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            logger.error('db error ejecutar reconexión:'+err.message);
            handleDisconnection();
        } else {
            throw err;
        }
    });
  //  exports.connection = connection;
}

handleDisconnection();



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
console.log('server using port 3000');