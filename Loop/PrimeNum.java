package Java.Loop;

import java.util.Scanner;

public class PrimeNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        sc.close();

        if (num <= 1) {
            System.out.println("Not a prime number");
            return;
        }

        boolean isPrime = true;
        int sqrt = (int) Math.sqrt(num);

        for(int i = 2; i < sqrt; i++ ){
            if(num % i == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            System.out.println("Prime number");
        } else{
            System.out.println("Not a prime number");
        }
    }
}
