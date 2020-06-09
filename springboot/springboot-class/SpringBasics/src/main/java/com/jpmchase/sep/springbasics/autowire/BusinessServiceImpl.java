package com.jpmchase.sep.springbasics.autowire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BusinessServiceImpl implements BusinessService {
    @Autowired
    DataService dataService;

    @Override
    public void someFunc() {
        dataService.display();
    }
}
