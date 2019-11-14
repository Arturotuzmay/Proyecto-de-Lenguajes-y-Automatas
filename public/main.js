var socket = io.connect('http://192.168.0.115:8081', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) { //Crea un arreglo que va almacenando en un arreglo
    asignarValores(elem.total, elem.isc, elem.admin, elem.civil, elem.indus, elem.ambie);
    //return(`${elem.total}`);
  });
  //document.getElementById('resultado').innerHTML = html;
}

function addMessage(e) { //Función que almacena el resultado recibido en el parámetro e y la almacena en la variable message
  var message = {
    total: document.getElementById("total").innerHTML,
    isc: document.getElementById("isc").innerHTML,
    admin: document.getElementById("admin").innerHTML,
    civil: document.getElementById("civil").innerHTML,
    indus: document.getElementById("indus").innerHTML,
    ambie: document.getElementById("ambie").innerHTML
  };

  socket.emit('new-message', message);
  return false;
}

function asignarValores(t,a,e,i,o,u) {
  document.getElementById("total").innerHTML= t;
  document.getElementById("isc").innerHTML= a;
  document.getElementById("admin").innerHTML= e;
  document.getElementById("civil").innerHTML= i;
  document.getElementById("indus").innerHTML= o;
  document.getElementById("ambie").innerHTML= u;
}

