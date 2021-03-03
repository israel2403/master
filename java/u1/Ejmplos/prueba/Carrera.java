package prueba;

public class Carrera {
    public static void main(String[] args) {
        // Contador de ciclos como objeto con asignación primitivo
        Integer contador = 0;

        // Parámetros
        double kilometros =  2.5;
        int tiempo = 2;

        while (true) {
            // Utilizando autoincremento sobre objeto Integer
            System.out.println("Vuelta: " + contador++ + " ");
            // Operación entre objcto Integer y primitivo double
            System.out.println("Distancia: " + contador *kilometros + " ");
            // Operación entre objeto Integer y primitivo Int
            System.out.println("Tiempo: " + contador*tiempo + " "); 

            // Comparación sobre objecto Integer
            if (contador > 5) {
                break; 
            }
        }
    }
}
