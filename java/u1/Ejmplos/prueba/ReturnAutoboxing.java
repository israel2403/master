package prueba;

public class ReturnAutoboxing {
    public static int addNumbers(Integer x, int y) {
        return (x+y);
    }

    public static void main(String[] args) {
        Integer result = addNumbers(10, 20);
        System.out.println(result);

        int result2 =  addNumbers(20, 20);
        System.out.println(result2);
    }
}
