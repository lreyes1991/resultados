$(document).ready(function(){
  
});

function consultarResultado(){

    var orden = document.getElementById("p_orden").innerText;
    var centro = document.getElementById("p_centro").innerText;


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
    
      var RESPUESTA  = (xhr.response);
          RESPUESTA=JSON.parse(RESPUESTA);
          console.log(RESPUESTA);
   }

  
  }
  
  xhr.open("GET",`http://159.223.159.94:3000/resultados/${codigo}`,true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send();
}

