package com.jpmchase.sep.springbasics.autowire;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class DataServiceImpl2 implements DataService {

    @Override
    public void display() {
        System.out.println("Using DataServiceImpl2");
    }
}