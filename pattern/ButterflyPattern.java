public class ButterflyPattern {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            // Left side triangle
            for (int j = 1; j <= i; j++) { 
                System.out.print("* ");
            }
            // Print Spaces
            for (int j = 1 ; j <= (n - i) * 2; j++) {
                System.out.print("  ");
            }

            // right Side Triangle
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }


        for (int i = n; i >=1; i--) {
            // Lower Left side triangle
            for (int j = 1; j <= i; j++) { 
                System.out.print("* ");
            }
            // Print Spaces
            for (int j = 1 ; j <= (n - i) * 2; j++) {
                System.out.print("  ");
            }

            // Lower right Side Triangle
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}


// *                 * 
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *