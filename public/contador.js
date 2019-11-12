document.querySelector("input[type=submit]").addEventListener("click",enviar); //Crea el evento click del boton
 
var resultadoEncuesta=[]; //definimos el array que contendra los respuestados de la encuesta
var totalPreguntas=1; //definimos la variable que contiene el numero de preguntas
var totalEncuestas=0; //variable que contiene el numero de encuestas realizadas
inicializarArrayResultados(); //inicializamos el array de los resultados de la forma: resultadoEncuesta["p1"]=[0,0]...

function enviar(e) { //Funcion que se ejecuta cada vez que se pulsa sobre el boton "enviar"
    var preguntas=document.querySelectorAll("input[type=radio]:checked"); //obtenemos todos los radio seleccionados
    if(preguntas.length==totalPreguntas) { //si estan todos seleccionados...
        totalEncuestas++;
        document.getElementById("error").innerHTML="";
        preguntas.forEach(function(pregunta) { //recorremos cada una de las respuestas
            resultadoEncuesta[pregunta.name][pregunta.value]++; //guardamos en un array la respuesta
            pregunta.checked=false; //desmarcamos el check
        });
        mostrarResultado(); //Lllama a la función mostrarResultado para que se encargue de todo lo demás
    }else{
        document.getElementById("error").innerHTML="Selecciona una opción";
    }
    e.preventDefault(); // cancelamos el evento para que no continue
}
  
function inicializarArrayResultados() { //Funcion para inicializar el array
    for(var i=1;i<=totalPreguntas;i++) {
        resultadoEncuesta["p"+i]=[0,0,0,0,0];
    }
}
  
function mostrarResultado() { //funcion que muestra los resultados en cada votacion
    resultado="";
    resultado+="<h2>De un total de "+totalEncuestas+" encuestados:</h2>";
    for(var i=1;i<=totalPreguntas;i++) {
        resultado+=
        "<div>"+
            "Ingeniería en Sistemas Computacionales: "+resultadoEncuesta["p"+i][0]+"<br>"+
            "Ingeniería en Administración: "+resultadoEncuesta["p"+i][1]+"<br>"+
            "Ingeniería Civil: "+resultadoEncuesta["p"+i][2]+"<br>"+
            "Ingeniería Industrial: "+resultadoEncuesta["p"+i][3]+"<br>"+
            "Ingeniería Ambiental: "+resultadoEncuesta["p"+i][4]+
        "</div>";
    }
    //document.getElementById("resultado").innerHTML=resultado;
    
    addMessage(resultado); //Llama a la función que se encuentra en el main.js del public con el mensaje de resultado
    
}