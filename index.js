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
            
  			//res.json(results);
              res.send(`<html lang="en"><head>

              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="icon" type="image/png" href="img/person-circle.svg">
              <title>Resultados</title>
              <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"> 
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
              <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
              
              <link rel="stylesheet" href="css/resultados.css">
              <script src="js/resultados.js"></script>
          </head>
          <header>
          </header>
          <div class="row col-12">
              <h1 class="col-6">Hospital X</h1>
              <img src="img/logo.jpg" class="col-6" style="width:50px;height:auto;"></img>
              <p class="col-12">Información del paciente</p>
              <p class="col-6">Centro</p><p class="col-6 form-control" id="i_centro">${results[0].Centro}</p>
              <p class="col-6">Orden</p><p class="col-4 form-control" id="i_orden">${results[0].Orden}</p>
              <p class="col-6">Paciente</p><p class="col-6" id="p_paciente">${results[0].NombrePaciente}</p>
              <p class="col-6">Fecha de Nacimiento</p><p class="col-6" id="p_fechaNacimiento">${results[0].fechaDeNacimiento}</p>
              <p class="col-6">Género</p><p class="col-6" id="p_genero">${results[0].Genero}</p>
              <p class="col-6">Fecha de Orden</p><p class="col-6" id="p_fechaOrden">${results[0].FechaOrden}</p>
              <h1 class="col-12" id="h_examen"></h1>
              
          </div>
          <body>
          
          </body>
          
              <footer>
                  <div class="row col-12 d-flex justify-content-center">
                    <button class="btn btn-success col-4">Descargar en PDF</button>
                  </div>
              </footer>
          </html>`);
	  	  }
	 );
});




app.listen(3000);
console.log('server using port 3000');