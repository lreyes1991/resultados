$(document).ready(function(){
    $('#b_buscar').on("click",function(){
        consultarResultado();
    });
});

function consultarResultado(){
    var centro = document.getElementById("i_centro").value;
    var orden = document.getElementById("i_orden").value;
    
    var codigo = `${centro}-${orden}`;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
    
      var RESPUESTA  = (xhr.response);
          RESPUESTA=JSON.parse(RESPUESTA);
          console.log(RESPUESTA);
          $('#p_paciente').text(RESPUESTA[0].NombrePaciente);
          $('#p_p_fechaNacimiento').text(RESPUESTA[0].fechaDeNacimiento);
          $('#p_genero').text(RESPUESTA[0].Genero);
          $('#p_fechaOrden').text(RESPUESTA[0].FechaOrden);
   }

  
  }
  
  xhr.open("GET",`http://159.223.159.94:3000/resultado/${codigo}`,true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send();
}

