public class Overloading {
    public static int sum(int a, int b) {
        return a + b;
    }

    public static float sum(float a, float b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(sum(2, 3));        // This should print: 5
        System.out.println(sum(2.5f, 3.5f));  // This should print: 6.0
    }
}
