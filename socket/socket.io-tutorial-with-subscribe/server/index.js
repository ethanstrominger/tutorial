const express = require('express');
const app2 = express();
const http = require('http').createServer(app2);
const io = require('socket.io')(http);
const path = require('path');
console.log('Starting');
app2.set('view engine', 'jade');
app2.get('/', (req, res) => {
  console.log('sending files '+path.resolve('../client'));
  app2.use(express.static(path.resolve('../client')));
  res.render('index');
  console.log('Done');
//  res.sendFile(path.resolve('../client/index.html'));
//  res.sendFile(path.resolve('../client/scripts'));
});

console.log('Here');
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
console.log('There');



http.listen(3000, () => {
  console.log('listening on *:3000');
});
