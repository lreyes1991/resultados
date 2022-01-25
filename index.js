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
    password : 'password',
    database : 'SGI_ROCHEGT'
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

app.get('/resultado/:codigo',(req, res)=>{
console.log(req.params);

    //recibir contenido
    var codigoenc = req.params.codigo;
    //decodificar
    const atob = (base64) => {
        return Buffer.from(base64, 'base64').toString('binary');
    };
    var codigo = atob(codigoenc);
    //crear array 
    var codigoarray = codigo.split('-');
    //asignar valores de arary a variables
    var centro = codigoarray[0];
    var orden  = codigoarray[1];
    //ejecutar consulta
    connection.query(`SELECT O.NombrePaciente,O.fechaDeNacimiento,O.Genero, DATE_FORMAT(O.FechaOrden, "%d/%m/%Y") as FechaOrden,R.nombreExamen 
    FROM Orden as O 
    INNER JOIN Resultados as R 
    ON O.Orden = R.Orden where O.Orden = '${orden}' and O.Centro = '${centro}';`,
    //fecha FROM ingreso_pacientes where codigo != "000" and fecha between '${fecha1} 00:00:00' and '${fecha2} 23:59:59'`,
		  function(err, results, fields) {
            res.render(`<p>${results[0].NombrePaciente}</p>`);
  			//res.json(results);
	  	  }
	 );
});




app.listen(3000);
console.log('server using port 3000');