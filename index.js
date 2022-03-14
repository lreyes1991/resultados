
var htmlaenviar='';
const express = require('express');
const IMAGENES = require("./imagenes/imagenes.js");



var logoigss = IMAGENES.ilogoigss;
var logohnvn = IMAGENES.ilogohnvn;


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
  /**/ 
  
var htmligss = `<html lang="en"><head>

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

<style>
#c1{text-align:center;}
#c2{text-align:center;}
@media screen and (min-width: 480px) {
#c1{text-align:start;}
#c2{text-align:end;}}
.row {margin-right: 1px;margin-left: 1px;border: 1px solid #e3e6f0;border-radius: 0.35rem;}
.respuesta{font-weight:bold;}
.bloque{border: 1px solid #e3e6f0;border-radius: 0.35rem;}
.titulo{font-weight:bold;color:#0062cc;background-color: #e3e6f0;}
</style>
<script>
$(document).ready(function(){
  
  var orden = $("#i_orden").text();
  var centro = '${centro}'
  switch(centro){
    case "412":
      $('#infoigss').attr('src', "/img/infoigssvillanueva.JPG");
    break;
    default:
      $('#infoigss').attr('src', "/img/blanco.JPG");
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
  
      var RESPUESTA  = (xhr.response);
          RESPUESTA=JSON.parse(RESPUESTA);
          var largo = RESPUESTA.length;

      if(largo == 0){
        
        $('#tabla_datos').append('<p class="col-4" style="color:#FF0000;">Pendiente</p><p class="col-4 respuesta" style="color:#FF0000;">Pendiente</p><p class="col-4" style="color:#FF0000;">Pendiente</p>');
        $('#botondescarga').prop('disabled',true);
        $('#botondescarga').removeClass("btn-success");
        $('#botondescarga').css("visibility","hidden");
        $('#pcomentario').css("display","none");
        
        Swal.fire({
          icon: 'info',
          title: 'Información',
          text: 'Sus resultados estan pendientes!'
        })

      }else{
        for(let i=0;i<=largo-1;i++){

          var rcomentario = RESPUESTA[i].Comentario;
          if (rcomentario == null){
            rcomentario = '';
          }

          $('#tabla_datos').append('<p class="col-4">'+RESPUESTA[i].nombreExamen+'</p>'+
          '<p class="col-4 respuesta ">' + RESPUESTA[i].resultado + '</p>'+
          '<p class="col-4">'+ RESPUESTA[i].valorDeReferencia +'</p>'+
          '<p class="col-12" style="font-weight: bold;">' + rcomentario + '</p>');
        }
      }
    }
    localStorage.setItem("orden","${orden}");
    localStorage.setItem("centro","${centro}");
  }

xhr.open("GET","https://www.consultaresultadoslaboratorio.health/resultados/" + orden + "/" + centro,true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();
});

function redireccionar(){
window.location.href='https://www.consultaresultadoslaboratorio.health/';
}

</script>
</head>
  <header class="row col-12">
    <h1 class="col-12">Resultados</h1>
    <div class="col-6"  id="c1">
      <img src="${logoigss}"  style="height:100px;"></img>
    </div>            
  </header>
<body>
<div class="row col-12">
<p class="col-12">Información del paciente</p>
<p class="col-6">Centro</p><p class="col-3 respuesta" id="i_centro">${nombreCentro}</p>
<p class="col-6">Orden</p><p class="col-4 respuesta" id="i_orden">${Orden}</p>
<p class="col-6">Paciente</p><p class="col-6 respuesta" id="p_paciente">${NombrePaciente}</p>
<p class="col-6">Fecha de Nacimiento</p><p class="col-6 respuesta" id="p_fechaNacimiento">${fechaDeNacimiento}</p>
<p class="col-6">Género</p><p class="col-6 respuesta" id="p_genero">${Genero}</p>
<p class="col-6">Fecha de Orden</p><p class="col-6 respuesta" id="p_fechaOrden">${FechaOrden}</p>
</div>
<div class="row col-12 d-flex justify-content-center">
<button id="botondescarga" class="btn btn-success col-4" href="https://consultaresultadoslaboratorio.health/pdf/ + ${orden} + "/" + ${centro}" onclick="redireccionar()">Descargar en PDF</button> 
</div> 
<div class="row col-12" id="tabla_datos">
<p class="col-12" style="font-weight: bold;" id="pcomentario">Comentario: ${ordencomentario}</p><br>
<p class="col-4 titulo">Prueba</p><p class="col-4 titulo">Resultado</p><p class="col-4 titulo">Referencia</p>
</div>
<div class="col-12 d-flex justify-content-center">
<img id="infoigss" class="col-12" src="/img/blanco.JPG"></img>
</div>
</body>
</html>`;

var htmlhnvn = `<html lang="en"><head>

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

<style>
#c1{
  text-align:center;
}
#c2{
  text-align:center;
}
@media screen and (min-width: 480px) {
#c1{
 text-align:start;
}
#c2{
 text-align:end;
}

}
.row {
  margin-right: 1px;
  margin-left: 1px;
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
}
.respuesta{
  font-weight:bold;
}
.bloque{
  border: 1px solid #e3e6f0;
  border-radius: 0.35rem;
}
.titulo{
  font-weight:bold;
  color:#0062cc;
  background-color: #e3e6f0;
}
</style>
<script>
$(document).ready(function(){
  
  var orden = $("#i_orden").text();
  var centro = '${centro}'
  switch(centro){
    case "412":
      $('#infoigss').attr('src', "/img/infoigssvillanueva.JPG");
    break;
    default:
      $('#infoigss').attr('src', "/img/blanco.JPG");
  }
      

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
  
      var RESPUESTA  = (xhr.response);
          RESPUESTA=JSON.parse(RESPUESTA);
          var largo = RESPUESTA.length;

      if(largo == 0){
        
        $('#tabla_datos').append('<p class="col-4" style="color:#FF0000;">Pendiente</p><p class="col-4 respuesta" style="color:#FF0000;">Pendiente</p><p class="col-4" style="color:#FF0000;">Pendiente</p>');
        $('#botondescarga').prop('disabled',true);
        $('#botondescarga').removeClass("btn-success");
        $('#botondescarga').css("visibility","hidden");
        $('#pcomentario').css("display","none");
        
        Swal.fire({
          icon: 'info',
          title: 'Información',
          text: 'Sus resultados estan pendientes!'
        })

      }else{
        for(let i=0;i<=largo-1;i++){

          var rcomentario = RESPUESTA[i].Comentario;
          if (rcomentario == null){
            rcomentario = '';
          }

          $('#tabla_datos').append('<p class="col-4">'+RESPUESTA[i].nombreExamen+'</p>'+
          '<p class="col-4 respuesta ">' + RESPUESTA[i].resultado + '</p>'+
          '<p class="col-4">'+ RESPUESTA[i].valorDeReferencia +'</p>'+
          '<p class="col-12" style="font-weight: bold;">' + rcomentario + '</p>');
        }
      }
    }
    localStorage.setItem("orden","${orden}");
    localStorage.setItem("centro","${centro}");
  }

xhr.open("GET","https://www.consultaresultadoslaboratorio.health/resultados/" + orden + "/" + centro,true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();
});

function redireccionar(){
window.location.href='https://www.consultaresultadoslaboratorio.health/HNVN';
}

</script>
</head>
  <header class="row col-12">
    <h1 class="col-12">Resultados</h1>
    <div class="col-6"  id="c1">
      <img src="${logohnvn}"  style="height:100px;"></img>
    </div>            
  </header>
<body>
<div class="row col-12">
<p class="col-12">Villa nueva HNVN</p>
<p class="col-6">Centro</p><p class="col-3 respuesta" id="i_centro">${nombreCentro}</p>
<p class="col-6">Orden</p><p class="col-4 respuesta" id="i_orden">${Orden}</p>
<p class="col-6">Paciente</p><p class="col-6 respuesta" id="p_paciente">${NombrePaciente}</p>
<p class="col-6">Fecha de Nacimiento</p><p class="col-6 respuesta" id="p_fechaNacimiento">${fechaDeNacimiento}</p>
<p class="col-6">Género</p><p class="col-6 respuesta" id="p_genero">${Genero}</p>
<p class="col-6">Fecha de Orden</p><p class="col-6 respuesta" id="p_fechaOrden">${FechaOrden}</p>
</div>
<div class="row col-12 d-flex justify-content-center">
<button id="botondescarga" class="btn btn-success col-4" href="https://consultaresultadoslaboratorio.health/pdf/ + ${orden} + "/" + ${centro}" onclick="redireccionar()">Descargar en PDF</button> 
</div> 
<div class="row col-12" id="tabla_datos">
<p class="col-12" style="font-weight: bold;" id="pcomentario">Comentario: ${ordencomentario}</p><br>
<p class="col-4 titulo">Prueba</p><p class="col-4 titulo">Resultado</p><p class="col-4 titulo">Referencia</p>
</div>
<div class="col-12 d-flex justify-content-center">
<img id="infoigss" class="col-12" src="/img/blanco.JPG"></img>
</div>
</body>
</html>`;
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
