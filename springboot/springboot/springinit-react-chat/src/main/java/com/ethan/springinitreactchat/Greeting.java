package com.ethan.springinitreactchat;

// Used by GreetingController as control type when sending to client
public class Greeting {

    private String content;
  
    public Greeting() {
    }
  
    public Greeting(String content) {
      this.content = content;
    }
  
    public String getContent() {
      return content;
    }
  
  }