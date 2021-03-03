package prueba;

import java.io.*;

class Conversion {
    // 1.  overloaded method with primitive formal argument
    public void method(int i){
        System.out.println("Primitive type int formal arguement: " + i);
    }

    // overloaded method with reference formal arguement
    public void method(Integer i) {
        System.out.println("Reference  type Integer formal argument " + i);
    }

    // 2. overloaded method primitive formal arugment
    // and to be invoked for wrapper object as orverloaded method
    // with wrapper object of same (Long) type as arguement is not
    // avaiable
    public void method(long i) {
        System.out.println("Primitive type long formal argument: " +i);
    }
}
