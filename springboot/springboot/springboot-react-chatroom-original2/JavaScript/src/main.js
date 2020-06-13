import car from './car';
import test from './test';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

car.type();
test.initializeWebSocketConnection();
stompClient = Stomp.over('test');
