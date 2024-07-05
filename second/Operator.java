package Java.second;

public class Operator {
    // public static void main(String[] args) {
    //     int x = 2, y = 5;
    //     int exp1 = (x * y / x);
    //     float exp2 = ( (float) y / x);
    //     System.out.println(exp1);
    //     System.out.println(exp2);
    // }

    // public static void main(String[] args) {
    //     int x = 200, y = 50, z = 100;
    //     if(x > y && y > z){
    //     System.out.println("Hello");
    //     }
    //     if(z > y && z < x){
    //     System.out.println("Java");
    //     }
    //     if((y+200) < x && (y+150) < z){
    //     System.out.println("Hello Java");
    //     }
    // }

    // public static void main(String[] args){
    //     int x, y, z;
    //     x = y = z = 2;
    //     x += y;
    //     y -= z;
    //     z /= (x + y);
    //     System.out.println(x + " " + y + " " + z);
    // }

    public static void main(String[] args){
        int x = 10, y = 5;
        int exp1 = (y * (x / y + x / y));
        int exp2 = (y * x / y + y * x / y);
        System.out.println(exp1);
        System.out.println(exp2);
    }
}
