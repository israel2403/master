package prueba;

public class TestBox {
    Integer i;
    int j;
    public static void main(String[] args) {
        TestBox tObject = new TestBox();
        tObject.go();
    }

    public void go() {
        j=i;
        System.out.println(j);
        System.out.println(i);

    }
}
