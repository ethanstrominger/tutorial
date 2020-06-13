import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

export default {
  input: 'src/main.js',
  output: {
    file: 'dest/bundle.js',
    format: 'iife'
  }
};
