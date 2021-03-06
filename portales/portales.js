var igss = `<html lang="en"><head>

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
          title: 'Informaci??n',
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
<p class="col-12">Informaci??n del paciente</p>
<p class="col-6">Centro</p><p class="col-3 respuesta" id="i_centro">${nombreCentro}</p>
<p class="col-6">Orden</p><p class="col-4 respuesta" id="i_orden">${Orden}</p>
<p class="col-6">Paciente</p><p class="col-6 respuesta" id="p_paciente">${NombrePaciente}</p>
<p class="col-6">Fecha de Nacimiento</p><p class="col-6 respuesta" id="p_fechaNacimiento">${fechaDeNacimiento}</p>
<p class="col-6">G??nero</p><p class="col-6 respuesta" id="p_genero">${Genero}</p>
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

var hnvn = `<html lang="en"><head>

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
          title: 'Informaci??n',
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
<p class="col-6">G??nero</p><p class="col-6 respuesta" id="p_genero">${Genero}</p>
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

module.exports = {
    hhtmligss:igss,
    hhtmlhnvn:hnvn
}