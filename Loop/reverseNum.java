package Java.Loop;

public class reverseNum {
    public static void main(String[] args) {
        int n = 110799;

        while (n > 0) {
            int lastDigit = n % 10;
            System.out.print(lastDigit + " ");
            n = n/10;
        }

    }
}
