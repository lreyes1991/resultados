const sellohnvn ="data:image/jpeg;base64,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";

const logohnvn ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QNSRXhpZgAATU0AKgAAAAgABVEAAAQAAAABAAAAAFEBAAMAAAABAAEAAFECAAEAAAMAAAAASlEDAAEAAAABAAAAAFEEAAEAAAAB/AAAAAAAAAAAAAAAADMAAGYAAJkAAMwAAP8AKwAAKzMAK2YAK5kAK8wAK/8AVQAAVTMAVWYAVZkAVcwAVf8AgAAAgDMAgGYAgJkAgMwAgP8AqgAAqjMAqmYAqpkAqswAqv8A1QAA1TMA1WYA1ZkA1cwA1f8A/wAA/zMA/2YA/5kA/8wA//8zAAAzADMzAGYzAJkzAMwzAP8zKwAzKzMzK2YzK5kzK8wzK/8zVQAzVTMzVWYzVZkzVcwzVf8zgAAzgDMzgGYzgJkzgMwzgP8zqgAzqjMzqmYzqpkzqswzqv8z1QAz1TMz1WYz1Zkz1cwz1f8z/wAz/zMz/2Yz/5kz/8wz//9mAABmADNmAGZmAJlmAMxmAP9mKwBmKzNmK2ZmK5lmK8xmK/9mVQBmVTNmVWZmVZlmVcxmVf9mgABmgDNmgGZmgJlmgMxmgP9mqgBmqjNmqmZmqplmqsxmqv9m1QBm1TNm1WZm1Zlm1cxm1f9m/wBm/zNm/2Zm/5lm/8xm//+ZAACZADOZAGaZAJmZAMyZAP+ZKwCZKzOZK2aZK5mZK8yZK/+ZVQCZVTOZVWaZVZmZVcyZVf+ZgACZgDOZgGaZgJmZgMyZgP+ZqgCZqjOZqmaZqpmZqsyZqv+Z1QCZ1TOZ1WaZ1ZmZ1cyZ1f+Z/wCZ/zOZ/2aZ/5mZ/8yZ///MAADMADPMAGbMAJnMAMzMAP/MKwDMKzPMK2bMK5nMK8zMK//MVQDMVTPMVWbMVZnMVczMVf/MgADMgDPMgGbMgJnMgMzMgP/MqgDMqjPMqmbMqpnMqszMqv/M1QDM1TPM1WbM1ZnM1czM1f/M/wDM/zPM/2bM/5nM/8zM////AAD/ADP/AGb/AJn/AMz/AP//KwD/KzP/K2b/K5n/K8z/K///VQD/VTP/VWb/VZn/Vcz/Vf//gAD/gDP/gGb/gJn/gMz/gP//qgD/qjP/qmb/qpn/qsz/qv//1QD/1TP/1Wb/1Zn/1cz/1f///wD//zP//2b//5n//8z///8AAAAAAAAAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABKAEsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKK4H45fHLSfg/4S1fUdS1bTdFsdHspL7UtTv5hDbaRAgDNNKWGAuzdg8/PsXa27FVGLk+WIadToPGHxG0vwUqpcySXF5Jjy7O1TzbiXJwNqD17Z64wMnivnH9pL/gonpvwMu5NP8QeLvh38PdRuUT7Hp+taj5+sTM77VCWMAkuX3YJGIMEOoyD978//jh/wUr8YftlNJefD/xTafCL4Gx3z2GqeKT4otdL8Za9HE3l3d2rhpbnSoLczWFw6RwmeSzeWZpgUaE/Clt8d/DfhrTdbk+HfhzxJ4xj03wusmsatD4fi0O90y3GlLp13rc95bCe9Nxcf2rqc8kt1IsVtPc28Mcl7a20az/TYHIXLWrvpp+jey/pOz0PJxGZRj7sN/62V9f6fmfqfrP/AAWZ8J61extY/HbVpPtKNcibTPhb4hu7PyfJebfGRZKZI/s8ZmDoGUxxySKSA7U3wN/wWC1bV9Xt7bw38cvg74uumSA2mi6/HP4VvtSVwrIIm1SCzVzIjIy4lZnR1dQVYMPjz4Ra78ZPjH+xJ8Sv2mLXxR8HdGh+E3idZrPQ9Q0Br+6iZHEstvFPNM4jikXUJIIrdlkWU3l00f2WWeR5Plbwn8cP+EYW/wDE2reBdV0iw+IXhSDwdpWuWSXU9osGnGxt557H7Q8Ynk8uwtbcp9p2IRKskbxXEkJ9Klk+HnzRir8rtunro9fdj0u9G3o7efNLMqitLo03t0+96X77H74+Bf8AgrjpfhjxhY+F/jF4P134Z63fJugurqBmsL5dwHmRN/FH8wG6NpBkHBI5r670TXLLxNpNvqGm3lrqFjdoJILm2lWWGZT0ZWUkMPcGv53/AIR/Gvw1ZeCta034c+ItNj8B2sT6jrngHxdaah/whNraFGjWGJFSW4s9QZxK0N1p0y3EySWkhspG+2ND9Bfss/tn6/8AsMpL4t8JQ+L774R29/BbeOvAXiOKSPWfhheXbZgEgIAktblVza6hGoinw0ThJwsb+TjMltpS0l2el/xdn82nor3dn30MdGS97/Oy7t/0/LR2/aiiuc+EnxY0H45/DfR/Fvhe/j1PQddt1urS4QFd6nsQeVYHIIPIIIro6+caadmehe+xzvxO8eR/D7wtNebUkuCNsMZblj64+8wHXCgk8Dvmvxx/4Kh/tLWP7SH7Qx+Fuoa81t8N/hnqjP4obQdTs31TUtbtITcy6l9iuIblrzR9FdYIp4xBkM13K0ZS1Z0/Qv8Ab6/aR/4UbpnirxQYY7i3+FfhHU/F7QT7BFNPaWzTwofm3ESTC2jC/ISW+VgR834MftUahD4a/Zk8EeGbfxFpOqXmpXz3PiCOyvINSs/EF61vp94+qyBoY3ikeXMsbmWaULfuhnsUzYQ/T5BgeaXtXvsvLTf5fr6Hk5niOSPL5X89Grf8G3RetvGfiX478O+OfFjf2LokvgnwbeT201zp1g8l8zyQm6VrqSOW5+ztcRG5eOKNZFjjjkijRsO/mfQVr/wVEtf2cbi00P4A+CtJ8L+C/Dd7DqcV94muL+fxN4jvgHge71eWyvYIZ9wnkAtHiktYlYoF2zAV8mqzOsMm6RvLiAEg+WVOrk8gFMmVmLl8KI3YBflUWtJ1a80PV7K7sbm9sLy0uoZraa0nkt5baVHV45IynzxyA5kjZP3m5Gfayuxr7eph4TSjNXS2T2+fm9tb76bnzkKk4/Dpe3b5emrsn116K5+zXgT9kPSPid+xN4u8Kaj8FvE/wj1343XGgeKtc8L6P4i0Kzt9K1KC6kkt4LayvrqO4s4tRa0byLORWCNI8W6ERNt+Yvjz+3d+z78XdbvtD+MXwt+NDHw7pcmjW+g2NlB4ebwZPFDJbJ9i086y1tZPCkSR+StsFkeKPfuBKtw/wI/aP+GOo/sgeIvGnxM8Mat4h8T+B/EOnWPi3XdQstH8VXnjhdTn1FYJZZ9SQX9vNaQWIggjstRgEZCSLKpkJrxD9vf4TeKvgd+1h4s8J+MfHmu/ErX9Jj05pfEWtveNqeoRzWcE1v8AakuJZJ4pkhmSN4TIXjMQIIUNu8bDYNOtKnVbum7WundKKdnd9OVrW+zerZ6GIrL2SqJJ+vm+1rq9m+vVX2POfBPj/Uvg34+tdf8ACupXFjqWh3MN7aXKRiL7WLaRLiBpbaNyjK00MMxiZpoThE3OsfH1J8L/AIsaL4B+GGm/Ffwjb2unyeFLm88I6/4L1O9WPS9c0qbdfajpk15e3E9zdQXZd0sLQ/6Qk0c8wime0u72T5B3+afkZ/LYl1fjaP3oJyRjkFSoMeE+bHyYdX9W/Y68Xro3xWj0Caae2h8YeZZ2LJLDB9m1UfaFsJ45JrW5WCeNrma3W4jtzJAdQeRUKszt6+KpqcLvVrp3X9X29Fvc4qNSUZNX9PXv67d+jZ+q3/BG79p6z/Zg/a0/4Uva6xqWu/CX4wabB4t+G2q37ZmME0byJHKFXYs4xJaXAOGFzZEbVBwf12r+bHx54v1HwX8Hk1ixs5fD/iT9nH4rWk9law65Bq/9g2OvWj3z2b3ccaFWh1bS7k7WEckcmoSRyJE6Nu/o2+HXjS3+JPw+0LxFZqyWmvafb6jArfeVJo1kUH3wwr4DPcOozjWW8tHrfVWttpdppu2h9Nl9ZTi49tv68np/Vj8y/wDgsn4rk/4V7+0dB5/2O7Xw9pYRwVjljh/tvRo2kwwdVVVIIdwwOSxXb8lfk/8At7fFLT/ij8Q9Bex1Cx1HTIrBtTlePxCdecXd15Nzfq0kuTCgnV18iI+T8rzRxrHK6N+wv/BUH4X3XjL4/wDjvwHHtD/Gz4fahomlIZTCi6ibUyWRyrbtz31nbIchc7lGeTu/ET4b61pnxr/aD0+51jQfD9rb+M7wK9npem/2VZWlzLJHDbNDa2bxrCDKYVIjO1fMZywwQPouH4w9kpPprf1SS/8ASXr5adTyc6m4yutb/p+enTX5nn0Q2mNpizXETo0hAIdn2xv8pJ++W2sHLAyKoXcu3ivc3tvp0fk3EluCsCqUJC7gMt/Fj5XJZl34LAsSrcO32/8ADv4e/Bf4Q/FSHxVZaT4T1jTdB00zW2n+Nbm61XRtRvpbcb4rqyk04xC2WQzPFJ9oMgZYH8ve52/b/wCzF4k+Huu/slW6eFbHwHodx49+IEgHhPwVq48P2MU9vBpzTW9lPcxgXBFnbm7kgCHIkkiChjz7WYYqtg6arTpOzs72klr1u1y263vbz2PBy/EYfG1ZUITSkr6Xg5Ll3vFTct9WrdNT87PhB+29488CfsO/Eax8L63Z+F4/D+p+DrDTp9AsLS0uEX7Nrf2q6a9MH2h72dolnNw8pkR5cRlVBVfmXV7261nWby61C+vL69vLxp7y7up3nuLl2zNPcSOWLMzkkks4Uh87pMll+q/+Ctmmz/CX4waJ4St9MuPDNprng/T9Y1y0vLbRWvbq9g1fxKLW4uH06KO3d/JYKpjHmSQJCJAZIw5+ZvBPgPUPiTq13a6atss9pvvXa6uDCsaL5bMzOAT5nmSJwpDtk42EAtWWxVVc1Fazd7LV6WXlfVO26s22b5piYYaEp4idowWreiX3vzS6a2XZGKGaVy2cysY2j+Vm2swOxPuknCoAQF+dQmEZcEb/AMItck8J/FjwnqEVxplg1jrVldi41NWnsrYQyopa6jUlp7dPnklUBhJEZAm0Bq+xfhr/AMEBfjN430+0u7422l2NxbJcRSqlpJHIh/eoQJrmCTG0rKR5Wz92GbcSxPC/8FDf+CbP/DurwX4Nk1rxBDqPijxjc3LWVmt1HPFHb2/lyzzzw+R5bK00tjCpaaRWE3KMqHDWKoTn7CM4tvRpSTe21rvze221yIVLrnjCSXRuE0rP+9y29Hex1nxO1Wzn/Z3/AGgm0e8sL7TLHwF4Pjit4ksZ5rSX/hN1MUVxLp91eWs0xgu3MYjnO2GWFWiUx75P3g/4Jt3U95+wF8G3uDukXwjpyD5t3yLboqdh/CF47dOetfzo6XJfH9h3x9qmyzh174/fFCw0a1s7OxSz3waZBcahf+VBFHshhW+1LTo1jjBRXRUACoWP9NX7Pnw4/wCFPfAbwV4T2JG3hnQrLS2CHI3QwJG3PfJUnPfrXx3ENo0Yx6uTf/ksU/xv+tz6bK7ym5eS017vzf466nzz/wAFd/gZrXjf4I6X488IvPb+LvhnfLrFrPBEskiRIRIX2nG4xyRxSAEgDaxPBYH8Gf8Agov8G9P0f4k2vxS8J2/2P4f/ABenn1qzhgdf+KY1kHdqekNsx5ZiuGE0J2oWtLi2VMrG2f6mbi3ju7eSKWNJIpFKOjruV1PBBHcH0r8eP+Clv7DX/DG2v+KtSm8JzeNP2bfiRNG/iLSrOYJfeF7oblhvbKWUsILuFnJhkbMcgeSCUBHzWOQZg6UvZv5ea3fzvZq/mrpM6Mxw/tIf1p0/X/h7JHyr+xMvw5/a98Kr4Xl8O/GbU/ilDFJcajD4evtOa0vrUblN1FbztBOrBWjDqjuY5ELF2VyzfcX7PfhzxX+zD+zhr3hn4dfBb4461qU15qWt2Euu2Nhc27X89nbRwJcOmomVow1tGXAcNsc7XJwV+BfA3wQ8K/s3+EovEN1d3XiL4d6lq0upaT8UvD8sVteW+oQNFLY2k0rhJtA1OP8A0iMxPPbJcnUmk+2Ti1t7Z/rz9i//AILX/G7TvhnoF94y8I6T8VPCt9byajp97PrA0nxFHaRaqdKJlc26Wd+0MrWollMNjGrXtuxy28r7uaVsTiKXs4NzpxaSi2tLapJ9lty3Vu17nzuXZXhMPivrKjyzd7tXd76ttXs3rvZtu+uhpfHj9mu//av+Nn9seOvgR8ZLeGx8I2enpJZ6PpRuGuVurqVlBlnkKw7XZh0O4dM/OPP/AInfsS6z4e+Cs2l+DP2b/i1pPiKfXILqa81DS/DzQCz+zSNJBDNaR29yI3u58eS5cbbSOTIc4H0pof8AwcWfAvW/DV1fat8MfjMf7O0iz8Q3iXHh3T7z+zrC7jtzDcySR3jpHFK1zDh22bjOpxzmsn40/wDBbG+8W2Wn6f8AD/4I6h4Rh1DVhCda+JWoQaRY2s76VdaiJZbKxa5uJ4nsLeSZfmhEoaNQ+XxXPgcwzLD1abULRhZpN2jdJa/Er93uY5lw/l+LoVqU3eVRNNr4rNvyukvK1lvfS3sfjH9t7w7+zF8DbXXfid4T+KvgfRNFs7Szur3U9DtlW4n8mGMxRlLpmeV3V2UKvUyEhlL7vw6/aZ+PXxC/4K0/tzJqGn6JI3iLxdfR6F4U8OicvHpdonnSRxPImCFxLcT3U/ygKLiQgovyfR3xj8QeJf2svjXqmh/E238dfGz4j2kV3plr4Ee1bwl/whcW23aLVLZYnuNOs7JHtLhG1Fp5kl+1LFN+7hinm80+AnwC1Lxf4svvgb+zzdW3xA8eeNLJtM8cfEDT5fM0bSNKZgsun6ZcbFMliXG251BkH2sR+VEmyUtJeWYWjhuaurc7W/2VF9e62u3ZX2Wlz1MVVnU5YdFp2bf5X02+/oj6D/4Jcfs1aT+2b/wUN8F6f4XuG174C/so2KR6dqzQBLfxRqRnuJZtSUZkQte6kZLhcNk2ttCGIZQG/dyvFf2BP2JPDP7Af7Nui+AfDq/abiBftWsao4/faxfuAZrhyecFuFUk7UCjJIJPtVfJ5pjfrNa8b8q0V+ut235ybbfmz2sFh/Y07Pd7/wCXogqvq2kWuv6XcWN9a297ZXkbQz288YkinRhhlZWBDKQcEEYNWKK807D82f2mv+CHmveAPHWrePv2X/GT/D3XdUhaG/8AD0+JdM1aJixa3kWYSRSwu0jloZ0eMnHQjNfCPxR+DPiz9mnxTcT/ABM/Ze8TeCdTuQLG88QfCrUI7PSNUtipjljk0q8ttQ0edXMjMY1W3j5dvLjJGf6FKK9nD51VgrVEpbavR2XRtbr1ucNbL6c3daP/AD3P5mJ/jD8J49G1HT7PxF8eLG017RrPw/qsU3wu8MXlxqFrbafJYwRmcapEsZit7gxrLHFbtmJCwJQ10/hD4j2Pj6y0bwz4E+H/AO1N8ZorGxl0ix0nVdctvD2ktbyWtjayRNbaVFNcGOWKzthJF/aEayESOdryTlv6KNV+Hnh/XbkzX2h6PeTMSS89lHIxJ68kE84FaVjYQaZarBbQw28Mf3Y4kCKvfgDivRqZ4oxT9n+NundJPy9NDCWWNPlcu/Tzt3fa/qfiz8Df+CM37RP7YXhWPQ/iHN4b/Z5+C+oMtxfeCvCtr9lk1g/LlrqFWM93ITEB5mp3U7puV0jR8gfqt+yL+xT8Of2HvhyfDXw80GLS7e4YSX17KfOvtUkBYiS4mI3SEF3IHCqXbAG459WorxcZmVfEJQm7RWyWi/4L83c68Pg6dJ8y1fdhRRRXnnUf/9k=";

var RESPUESTA = null;
$(document).ready(function(){

  var w;
startWorker();
function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("js/redireccionar.js");
    }
    w.onmessage = function(event) {
    var numero = event.data;
    if(numero ==2){
      window.history.back();
      stopWorker();
    }
    };
  } else {
    console.log("No se puede redireccionar");
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}

  var orden1 = localStorage.getItem("orden");
  var centro1 = localStorage.getItem("centro");
  
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function(){
  if(this.readyState==4 && this.status==200){
  
        RESPUESTA  = (xhr.response);
        RESPUESTA=JSON.parse(RESPUESTA);
        var largo = RESPUESTA.length;
        console.log(RESPUESTA);

//etiquetas



var nombrepaciente    = RESPUESTA[0].NombrePaciente
var afiliacion        = RESPUESTA[0].idPaciente
var genero            = RESPUESTA[0].Genero
var fechadenacimiento = RESPUESTA[0].fechaDeNacimiento
var origen            = RESPUESTA[0].nombreCentro

var nombremedico      = RESPUESTA[0].nombreMedico
var servicio          = RESPUESTA[0].nombreUnidadProcedencia

var orden             = RESPUESTA[0].Orden
var centro            = RESPUESTA[0].Centro
var recepcion         = RESPUESTA[0].FechaOrden
var nombreOrigen      = RESPUESTA[0].nombreOrigen;


var date = new Date(recepcion);
result = date.toLocaleString();
recepcion = (result);
//condigional de logotipo
if (centro =='HNVN'){
  logoPDF = logohnvn;
}else{
 // logoPDF = logoigss;
}
$('#logopdf').attr('src',logoPDF);
//$("#p_centro").text(centro);
//$("#p_orden").text(orden);
$("#p_paciente").text(nombrepaciente);
//$("#p_afiliacion").text(afiliacion);
//$("#p_genero").text(genero);
//$("#p_nacimiento").text(fechadenacimiento);
$("#p_origen").text(nombreOrigen);
$("#p_origen2").text(origen);



$("#p_peticion").text(afiliacion);
$("#p_historia").text(orden);
$("#p_fecha").text(recepcion);

$("#p_medico").text(nombremedico);
$("#p_servicio").text(servicio);
$("#firmapdf").attr('src',sellohnvn);
/*
switch(centro){
case "412":
  $('#pdfinfo').attr('src', "/img/infoigssvillanueva.JPG");
break;
default:
  $('#pdfinfo').attr('src', "/img/blanco.JPG");
  $('#pdfinfo').css('display', 'inline');

  // titulo
  $("#tp_paciente")  .css('top','13%');
  $("#tp_afiliacion").css('top','16%');
  //$("#tp_genero")    .css('top','19%');
  //$("#tp_nacimiento").css('top','22%');
  $("#tp_origen")    .css('top','25%');
  
  $("#tp_peticion")  .css('top','16%');
  $("#tp_recepcion") .css('top','13%');

  $("#tp_medico")    .css('top','19%');
  $("#tp_servicio")  .css('top','22%');
  // contenido
  $("#p_paciente")   .css('top','13%');
  $("#p_afiliacion") .css('top','16%');
  //$("#p_genero")     .css('top','19%');
  //$("#p_nacimiento") .css('top','22%');
  $("#p_origen")     .css('top','25%');
  
  $("#p_peticion")   .css('top','16%');
  $("#p_recepcion")  .css('top','13%');

  $("#p_medico")     .css('top','19%');
  $("#p_servicio")   .css('top','22%');
}
  */


        for(let i=0;i<=largo-1;i++){

          var nombreExamen      = RESPUESTA[i].nombreExamen;
          var resultado         = RESPUESTA[i].resultado;
          var unidadMedida      = RESPUESTA[i].unidadMedida;
          var valorDeReferencia = RESPUESTA[i].valorDeReferencia;
          var comentariogeneral = RESPUESTA[i].ccomentario;

          if(nombreExamen == ''){nombreExamen ='      '};
          if(resultado == ''){resultado ='Pendiente'};
          if(unidadMedida == NaN){unidadMedida ='------'};
          if(valorDeReferencia == ''){valorDeReferencia ='------'};

          if(comentariogeneral == null){comentariogeneral =''};
          $('#titulotabla').text('Comentario:' + comentariogeneral);


         
          $('#tblresultados tr:last').after(`<tr><td  style="font-style:Arial;font-size:10px;"class="letra">${nombreExamen}</td>
                                                 <td  style="font-style:Arial;font-size:10px;"class="letra">${resultado}</td>
                                                 <td  style="font-style:Arial;font-size:10px;"class="letra">${unidadMedida}</td>
                                                 <td  style="font-style:Arial;font-size:10px;"class="letra">${valorDeReferencia}</td></tr>`);
                                                // if(i == 2){
                                                 // $("#p_servicio").after("<br><br>");
                                                  /*
                                                  $("#tp_paciente").css('top','18%');
                                                  $("#tp_afiliacion").css('top','23%');
                                                  $("#tp_genero").css('top','28%');
                                                  $("#tp_nacimiento").css('top','33%');
                                                  $("#tp_origen").css('top','38%');
                                                  
                                                  $("#tp_peticion").css('top','23%');
                                                  $("#tp_recepcion").css('top','18%');
                                                
                                                  $("#tp_medico").css('top','28%');
                                                  $("#tp_servicio").css('top','33%');

                                                  $("#p_paciente").css('top','18%');
                                                  $("#p_afiliacion").css('top','23%');
                                                  $("#p_genero").css('top','28%');
                                                  $("#p_nacimiento").css('top','33%');
                                                  $("#p_origen").css('top','38%');
                                                  
                                                  $("#p_peticion").css('top','23%');
                                                  $("#p_recepcion").css('top','18%');
                                                
                                                  $("#p_medico").css('top','28%');
                                                  $("#p_servicio").css('top','33%');
                                                  $('#pdfinfo').remove();
                                                  */
                                               // }
                                                 if(RESPUESTA[i].rcomentario == null){
                                                  
                                                 }else{
                                                  $('#tblresultados tr:last').after(`<tr><td colspan = "4">${RESPUESTA[i].rcomentario}</td></tr>`);
                                                 }
                                                 
        }
        
        const elemento = document.getElementById("body1");
        
        var doc = new jsPDF();
        //doc.text(50, 5, 'INSTITUTO GUATEMALTECO DE SEGURIDAD SOCIAL');
        html2pdf()
        .set({
          margin:1,
          filename:orden1 + centro1 +  '.pdf',
          image:{
            type:'jpeg',
            quality:0.98
          },html2canvas:{
            scale:3,
            letterRendering:true
          },
          jsPDF:{
            unit:"mm",
            format:"letter",
            orientation:'portrait',
            top:120
          }

        })
        .from(elemento)
        .save();
        //llamar();
      }
     // setTimeout(regresar(),2000);
    }


xhr.open("GET","https://www.consultaresultadoslaboratorio.health/pdf/" + orden1 + "/" + centro1,true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();

});


function llamar(){
  setTimeout(regresar(),10000);
}

function regresar(){
  window.location.href = "https://www.consultaresultadoslaboratorio.health";
  //$('#body2').append('<div style ="    width: 100%;height: 100%;background-color: #FFFFFF;position: absolute;top: 0%;"></div>')
  
}
