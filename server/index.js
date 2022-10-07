const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('new-message', (message) => {
      console.log(message);
      io.emit('new-message', message);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});