import java.util.ArrayList;

public class PrimeInRange {
    public static boolean isPrime(int i) {
        if (i <= 1) {
         return false;
        }
        for (int j = 2; j <= Math.sqrt(i); j++) {
         if (i % j == 0) {
             return false;
         }
        }
        
        return true;
    }

    public static void main(String[] args) {
        int start = 1, end = 100;
        ArrayList<Integer> primes = new ArrayList<>();

        for (int i = start; i <= end; i++) {
            if ( isPrime(i)) {
                primes.add(i);
                System.out.println(i);
            }
        }
        System.out.println("Total prime number is"  +  primes.size());

    }

}