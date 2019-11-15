document.querySelector("input[type=submit]").addEventListener("click",enviar); //Crea el evento click del boton
 
var resultadoEncuesta=[]; //definimos el array que contendra los respuestados de la encuesta
var totalPreguntas=1; //definimos la variable que contiene el numero de preguntas
var totalEncuestas=document.getElementById("total").innerHTML; //variable que contiene el numero de encuestas realizadas
inicializarArrayResultados(); //inicializamos el array de los resultados de la forma: resultadoEncuesta["p1"]=[0,0]...

function enviar(e) { //Funcion que se ejecuta cada vez que se pulsa sobre el boton "enviar"
    totalEncuestas=document.getElementById("total").innerHTML;
    for(var i=1;i<=totalPreguntas;i++) {
        resultadoEncuesta["p"+i]=[document.getElementById("isc").innerHTML,document.getElementById("admin").innerHTML,document.getElementById("civil").innerHTML,document.getElementById("indus").innerHTML,document.getElementById("ambie").innerHTML];
    }
    var preguntas=document.querySelectorAll("input[type=radio]:checked"); //obtenemos todos los radio seleccionados
    if(preguntas.length==totalPreguntas) { //si estan todos seleccionados...
        totalEncuestas++;
        document.getElementById("error").innerHTML="";
        preguntas.forEach(function(pregunta) { //recorremos cada una de las respuestas
            resultadoEncuesta[pregunta.name][pregunta.value]++; //guardamos en un array la respuesta
            pregunta.checked=false; //desmarcamos el check
        });
        //mostrarResultado(); //Lllama a la función mostrarResultado para que se encargue de todo lo demás
        enviarValores();
        document.getElementById("btnenv").hidden=true;
    }else{
        document.getElementById("error").innerHTML="Selecciona una opción";
    }
    e.preventDefault(); // cancelamos el evento para que no continue
    
}
  
function inicializarArrayResultados() { //Funcion para inicializar el array
    for(var i=1;i<=totalPreguntas;i++) {
        resultadoEncuesta["p"+i]=[document.getElementById("isc").innerHTML,document.getElementById("admin").innerHTML,document.getElementById("civil").innerHTML,document.getElementById("indus").innerHTML,document.getElementById("ambie").innerHTML];
    }
}

function enviarValores(){
    var t= totalEncuestas;
    var v= resultadoEncuesta["p1"][0];
    var w= resultadoEncuesta["p1"][1];
    var x= resultadoEncuesta["p1"][2];
    var y= resultadoEncuesta["p1"][3];
    var z= resultadoEncuesta["p1"][4];
    asignarValores(t,v,w,x,y,z);
    addMessage(t);
}
