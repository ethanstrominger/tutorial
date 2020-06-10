const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../client/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected! '+socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('set user', (msg) => {
      console.log('joining ' + 'user-' + msg);
      socket.join('user-'+msg);
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('user message', (msg) => {
    console.log('sending: ' + msg.from+' '+msg.message+' to: '+'user-'+msg.to);
    io.sockets.in('user-'+msg.to).emit('user message',{'from':msg.from, 'message': msg.message});
  });
});



http.listen(3000, () => {
  console.log('listening on *:3000');
});