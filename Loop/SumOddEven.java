package Java.Loop;

import java.util.Scanner;

public class SumOddEven {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number;
        int evenSum = 0;
        int oddSum = 0;
        
        do{
            System.out.print("Enter a number: ");
            number = sc.nextInt();
            if (number % 2 == 0) {
                evenSum += number;
                } else {
                    oddSum += number;
                }
        } while (number != 0);

        System.out.println("The sum of even numbers is: " + evenSum);
        System.out.println("The sum of odd numbers is: " + oddSum);
        sc.close();
    }
}
