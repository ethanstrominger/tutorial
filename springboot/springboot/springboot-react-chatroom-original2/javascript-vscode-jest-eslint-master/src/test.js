import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

class Test {
  baseUrl = 'http://localhost:8080/';

  serverUrl = `${this.baseUrl}socket`;

  isLoaded = false;

  initializeWebSocketConnection() {
    console.log('initialize');
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.isLoaded = true;
      that.openGlobalSocket();
    });
  }

  openGlobalSocket() {
    this.stompClient.subscribe('/socket-publisher', message => {
      this.handleResult(message);
    });
  }
}
export default new Test();
