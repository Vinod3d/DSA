public class Binomial {

    // Function to calculate factorial
    public static int factorial(int num) {
        int fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    // Function to calculate binomial coefficient
    public static int binCoeff(int n, int r) {
        int fact_n = factorial(n);
        int fact_r = factorial(r);
        int fact_n_minus_r = factorial(n - r);

        return fact_n / (fact_r * fact_n_minus_r);
    }

    public static void main(String[] args) {
        System.out.println(binCoeff(5, 2)); // Output: 10
    }
}
