import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

console.log('Start');

class Test {

  baseUrl = "http://localhost:8080/";
  serverUrl = baseUrl + 'socket';
  isLoaded = false;
  initializeWebSocketConnection();

  initializeWebSocketConnection() {
      let ws = new SockJS();
      this.stompClient = Stomp.over(ws);
      let that = this;
      this.stompClient.connect({}, function (frame) {
        that.isLoaded = true;
        that.openGlobalSocket()
      });
  }

  openGlobalSocket() {
      this.stompClient.subscribe("/socket-publisher", (message) => {
        this.handleResult(message);
      });
  }
}
export default new Test();




