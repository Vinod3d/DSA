public class SumOfDigits {
    public static int sumOfDigits(int num) {
        int sum = 0;
        while (num != 0) {
            int digit = num % 10;  // Get the last digit
            sum += digit;          // Add it to the sum
            num /= 10;             // Remove the last digit
        }
        return sum;
    }

    public static void main(String[] args) {
        int num = 12345;
        int result = sumOfDigits(num);
        System.out.println("The sum of the digits in " + num + " is " + result);
    }
}
