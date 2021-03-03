package prueba;

public class Autoboxing {
    public static void main(String[] args) {
        // creating an Integer object
        // with value 0
        Integer i = new Integer(10);

        // Unboxing the object
        int i1 = i;

        System.out.println("Value of i: " + i);
        System.out.println("Value of i1: " + i);

        //Autoboxing of char
        Character gfg = 'a';

        // Autoboxing of character
        char ch = gfg;
        System.out.println("Value of ch: " + ch);
        System.out.println("Value of gfg: " + gfg);
    }
}
