package com.jpmchase.sep.springbasics.autowire;

import org.springframework.stereotype.Component;

@Component
public class DataServiceImpl1 implements DataService {

    @Override
    public void display() {
        System.out.println("Using DataServiceImpl1");
    }
}
