package com.jpmchase.sep.springbasics.tightlycoupled;

public class MainAppTightlyCoupled {
    public static void main(String[] args) {
        BusinessServiceImpl businessObj = new BusinessServiceImpl();
        businessObj.someFunc();
    }
}
