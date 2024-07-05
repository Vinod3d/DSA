import java.util.Scanner;

public class OddEven {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();

        if(number % 2 == 0){
            System.out.println("Your Entered number if Even");
        } else{
            System.out.println("Your Entered number if Odd");
        }

        sc.close();
    }
}
