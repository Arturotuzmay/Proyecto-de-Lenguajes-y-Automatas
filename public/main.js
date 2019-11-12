var socket = io.connect('http://192.168.0.6:8081', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) { //Crea un arreglo que va almacenando en un arreglo
    return(`${elem.text}`);
  });
  document.getElementById('resultado').innerHTML = html; //Imprime el resultado en el <div> del index con el Id="resultado"
}

function addMessage(e) { //Función que almacena el resultado recibido en el parámetro e y la almacena en la variable message
  var message = {
    text: e
  };

  socket.emit('new-message', message);
  return false;
}
