var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var resultados = [];

app.use(express.static('public'));

app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
});

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', resultados);

  socket.on('new-message', function(data) {
    resultados.push(data);
    io.sockets.emit('messages', resultados);
  });
});

server.listen(8081, function() {
  console.log("Servidor corriendo en http://localhost:8081");
});