package com.jpmchase.sep.springbasics.tightlycoupled;

public class BusinessServiceImpl {
    public void someFunc() {
        DataServiceImpl2 dataServiceObj1 = new DataServiceImpl2();
        dataServiceObj1.display();
    }
}
