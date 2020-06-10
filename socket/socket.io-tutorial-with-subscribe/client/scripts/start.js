  let isSocketDefined = false;
  $(function () {
    const socket = io();
    // socket.id is not initialized until after the startup function is complete
    $('#messageform').children().focus (function() {
      console.log(socket.id+': field has focus');
      if (socket.id !== '' && ! isSocketDefined) {
        console.log('Do processing afer socket id is defined once');
        isSocketDefined = true;
      }
    });
    $('form').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      const messageObj = {'from':$('#from').val(),'to':$('#to').val(),'message':$('#message').val()};
      socket.emit('set user',messageObj.from);
      if (messageObj.to == '') {
        console.log('Sending message to all '+socket.id);
        socket.emit('chat message', messageObj);
      } else {
        console.log('Sending message to '+messageObj.to+' '+socket.id);
        socket.emit('user message', messageObj);
      }
      $('#message').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      console.log('Received chat message');
      $('#messages').append($('<li>').text(msg.from+':'+msg.message));
    });
    socket.on('user message', function(msg){
      console.log('Received user message from '+msg.from);
      $('#messages').append($('<li>').text(msg.from+':'+msg.message));
    });
<!--    $('#to').focus();-->
<!--    $('#to').focus(function(){console.log("XX"));-->
});
