var htmlaenviar='';
const express = require('express');

const IMAGENES = require("./imagenes/imagenes.js");


var infoigss = IMAGENES.iinfoigss;
var logoigss = IMAGENES.ilogoigss;
var logohnvn = IMAGENES.ilogohnvn;

const PORTALES = require('./portales/portales.js');

var htmligss = PORTALES.hhtmligss;
var htmlhnvn = PORTALES.hhtmlhnvn;

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

app.get('/', (req,res)=>{
res.render('index');
});

app.get('/HNVN', (req,res)=>{
  res.render('indexHNVN');
  });
/*
VISUALIZADOR y PDF
*/
app.get('/pdf/:orden/:centro', (req,res)=>{
  var orden = req.params.orden;
  var centro = req.params.centro;
  connection.query(`SELECT O.Orden,O.Centro,O.idPaciente, O.nombreMedico, O.nombreUnidadProcedencia,O.NombrePaciente,O.nombreCentro,DATE_FORMAT(O.fechaDeNacimiento, "%d/%m/%Y") as fechaDeNacimiento,O.Genero,O.Comentario as ccomentario,O.nombreOrigen,R.Comentario as rcomentario,O.FechaOrden,R.nombreExamen,R.resultado,R.valorDeReferencia ,R.unidadMedida
  FROM Orden as O 
  inner JOIN Resultados as R 
  ON 
  O.centro = R.centro and O.Orden = R.Orden 
  where O.Orden = '${orden}' and O.Centro = '${centro}';`,
    function(err, results, fields) {
      res.json(results);
    });
});

app.get('/resultadospdf/:orden/:centro', (req,res)=>{
  var orden = req.params.orden;
  var centro = req.params.centro;
  connection.query(`SELECT R.nombreExamen,R.resultado,R.unidadMedida,R.valorDeReferencia 
  FROM Resultados as R
  WHERE Orden = '${orden}' and Centro = '${centro}';`,
    function(err, results, fields) {
      res.json(results);
    });
});


app.get('/estabilidad/', (req,res)=>{
      res.send("Funcionando");
});

app.get('/resultados/:orden/:centro', (req,res)=>{
  var orden = req.params.orden;
  var centro = req.params.centro;
  connection.query(`select nombreExamen,resultado,Comentario, valorDeReferencia from Resultados where Orden ='${orden}' and Centro = '${centro}';`,
  
    function(err, results, fields) {
      res.json(results);
      
    }
  );
});

var TIME = 2;
    TIME = (TIME * 60 * 60);

setInterval(estabilizador,(TIME * 1000));

function estabilizador(){
        connection.query(`UPDATE Orden SET Genero = 'M' where Orden = "220201349"`,[],function (error, results) {
        }
        );
       console.log('estabilizado');
}

app.get('/resultado/:codigo',(req, res)=>{

    //recibir contenido
    var codigoenc = req.params.codigo;
    //decodificar
    const atob = (base64) => {
        return Buffer.from(base64, 'base64').toString('binary');
    };
    var codigo = atob(codigoenc);
    var codigoarray = codigo.split('-');
    var centro = codigoarray[0];
    var orden  = codigoarray[1];

    connection.query(`SELECT O.Orden,O.Centro,O.NombrePaciente,O.nombreCentro,DATE_FORMAT(O.fechaDeNacimiento, "%d/%m/%Y") as fechaDeNacimiento,O.Genero,O.Comentario as ccomentario,O.nombreOrigen,R.Comentario as rcomentario, DATE_FORMAT(O.FechaOrden, "%d/%m/%Y") as FechaOrden,R.nombreExamen,R.resultado,R.valorDeReferencia ,R.unidadMedida
    FROM Orden as O left JOIN Resultados as R 
    
    ON 
    O.centro = R.centro and
    O.Orden = R.Orden where O.Orden = '${orden}' and O.Centro = '${centro}';`,
    
		  function(err, results, fields) {
            var color = '#000000';
            var Orden             = results[0].Orden;
            var Centro            = results[0].Centro;
            var NombrePaciente    = results[0].NombrePaciente;
            var nombreCentro      = results[0].nombreCentro;
            var fechaDeNacimiento = results[0].fechaDeNacimiento;
            var Genero            = results[0].Genero;
            var FechaOrden        = results[0].FechaOrden;
            var nombreExamen      = results[0].nombreExamen;
            var resultado         = results[0].resultado;
            var valorDeReferencia = results[0].valorDeReferencia;
            var ordencomentario   = results[0].ccomentario;
            var resultadocomentario = results[0].rcomentario;

            if(Orden == null){Orden =''}
            if(Centro == null){Centro =''}
            if(NombrePaciente == null){NombrePaciente =''}
            if(nombreCentro == null){nombreCentro =''}
            if(valorDeReferencia == null){valorDeReferencia ='Pendiente'}
            if(Genero == null){Genero =''}
            if(FechaOrden == null){FechaOrden =''}
            if(nombreExamen == null){nombreExamen =''}
            if(ordencomentario == null){ordencomentario =''}
            if(resultado == 'null'){
              resultado ='Pendiente'
              color='#FF0000';
            }

/*

*/
            if(fechaDeNacimiento == null){fechaDeNacimiento =''}

if (centro =='HNVN'){
  htmlaenviar = htmlhnvn;
}else{
  htmlaenviar = htmligss;
}
  /**/			
              res.send(htmlaenviar);
	  	  }
	 );
});

var fs = require('fs');
var https = require('https');

var credentials = {
   ca: fs.readFileSync(__dirname + "/ssl/consultaresultadoslaboratorio_health.ca-bundle", 'utf8'), //la certification authority o CA
   key: fs.readFileSync(__dirname + "/ssl/consultaresultadoslaboratorio.key", 'utf8'), //la clave SSL, que es el primer archivo que generamos ;)
  cert: fs.readFileSync(__dirname + "/ssl/consultaresultadoslaboratorio_health.crt", 'utf8') //el certificado
};


console.log(__dirname);

// CODIGO DE LAS RUTA Y DEMAS DE NUESTRA APP

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'http') {
    res.redirect('https://consultaresultadoslaboratorio.health' + req.url, next)
  } else {
    return next()
  }
})

app.listen(3000);
console.log('server using port 3000');
