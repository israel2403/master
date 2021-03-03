package prueba;

public class AutoboxingMethods {
    public static void main(String[] args) {
        Conversion c = new Conversion();
        // invoking the method with different signature.
        c.method(10);
        c.method(new Integer(15));
        c.method(new Long(100));
    }
}
