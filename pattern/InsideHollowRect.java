
public class InsideHollowRect {
    public static void main(String[] args) {
        int n = 15; // Size of the outermost rectangle
        int middleStart = 5; // Start position of the middle rectangle
        int middleEnd = n - 4; // End position of the middle rectangle
        int innerStart = 7; // Start position of the innermost rectangle
        int innerEnd = n - 6; // End position of the innermost rectangle

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                // Conditions for the outermost rectangle
                if (i == 1 || i == n || j == 1 || j == n ||
                    // Conditions for the middle rectangle
                    (i == middleStart && j >= middleStart && j <= middleEnd) ||
                    (i == middleEnd && j >= middleStart && j <= middleEnd) ||
                    (j == middleStart && i >= middleStart && i <= middleEnd) ||
                    (j == middleEnd && i >= middleStart && i <= middleEnd) ||
                    // Conditions for the innermost rectangle
                    (i == innerStart && j >= innerStart && j <= innerEnd) ||
                    (i == innerEnd && j >= innerStart && j <= innerEnd) ||
                    (j == innerStart && i >= innerStart && i <= innerEnd) ||
                    (j == innerEnd && i >= innerStart && i <= innerEnd)) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}


// * * * * * * * * * * * * * * * 
// *                           *
// *                           *
// *                           *
// *       * * * * * * *       *
// *       *           *       *
// *       *   * * *   *       * 
// *       *   *   *   *       *
// *       *   * * *   *       *
// *       *           *       *
// *       * * * * * * *       *
// *                           *
// *                           *
// *                           *
// * * * * * * * * * * * * * * *