package com.jpmchase.sep.springbasics.looselycoupled;

public class BusinessServiceImpl implements BusinessService {
    DataService dataService;

    public BusinessServiceImpl(DataService dataService) {
        this.dataService = dataService;
    }

    @Override
    public void someFunc() {
        dataService.display();
    }
}
