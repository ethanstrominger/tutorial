package com.jpmchase.sep.springbasics.autowire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class MainAppAutowire {

	public static void main(String[] args) {
		ConfigurableApplicationContext applicationContext = SpringApplication.run(MainAppAutowire.class, args);
		BusinessService businessObj = applicationContext.getBean(BusinessServiceImpl.class);
		businessObj.someFunc();
	}

}
