package com.jpmchase.sep.springbasics.looselycoupled;

public class MainAppLooselyCoupled {
    public static void main(String[] args) {
        BusinessService businessObj =
                new BusinessServiceImpl(new DataServiceImpl2());
        businessObj.someFunc();
    }
}
