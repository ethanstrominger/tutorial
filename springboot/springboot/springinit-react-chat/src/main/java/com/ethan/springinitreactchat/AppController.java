package com.ethan.springinitreactchat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class AppController {

// Client flow:
// app.js sends message to "/app/hello" using json compatible with MessageFrom
//    app is set as application prefix in WebSocketConfig)
// app.js on client subscribes to /topic/greetings 
//   and when received, calls app.js showGreeting function
//   with return value that is compatible with MessageToClient.

// Below function takes a MessageFromClient received from client
// and sends to clients scubscribed to topics/greetings a MessageToClient
  @MessageMapping("/hello")
  @SendTo("/topic/greetings")
  public MessageToClient greeting(MessageFromClient message) throws Exception {
    Thread.sleep(1000); // simulated delay
    return new MessageToClient("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
  }

}