### 1. Check if A Number if prime or not.

```java
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

```

### 2. Write a program that reads a set of integers, and then prints the sum of the
even and odd integers.

```java
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
```

### 3. Write a program to find the factorial of any number entered by the user.

```java
    import java.util.Scanner;

    public class Factorial {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            int num;
            int fact=1;

            System.out.println("Enter any positive integer");
            num = sc.nextInt();

            for(int i=1; i<=num; i++){
                fact*=i;
            }

            System.out.println("Factorial: " + fact);
            sc.close();
        }
    }

```

### 4. Write a program to print the multiplication table of a number N, entered by the
user.

```java
import java.util.Scanner;

    public class TableOfN {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter the number: ");
            int num = sc.nextInt();

            for(int i=1; i<=10; i++){
                System.out.println(num + " * " + i + " = " + (num*i));
            }

            sc.close();
        }
    }
```

### 5. Swap Number without using third variable.

```java
    public class Swap {
        public static void main(String[] args) {
            int a = 10, b = 20;
            System.out.println("Before swapping: a = " + a + " b = " + b);
            
            // Swap 
            a = a + b;
            b = a - b;
            a = a - b;

            System.out.println("After swapping: a = " + a + " b = " + b);

        }
    }

```

### 6. Prime Number in Range.

```java
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
```

### 7. Binary to Decimal.

```java
    public class binaryToDecimal{
        public static void main(String[] args) {
            int n = 111;
            int ans = 0;
            int i = 0;
            while(n>0){
                int bit = n % 10;
                ans += bit * (int)Math.pow(2,i);
                n = n / 10;
                i++;
            }

            System.out.println(ans);
        }
    }
```

### 8. Decimal to Binary.

```java
    public class decimalToBinary {
        public static void main(String[] args) {
            int n = 7;
            int[] arr = new int[10];
            int i = 0;
            while (n > 0) {
                arr[i] = n % 2;
                n = n / 2;
                i++;
            }
            for (int j = i - 1; j >= 0; j--) {
                System.out.print(arr[j]);
            }
        }
    }

```

### 9. Check if number is palindrome.

```java
    public class Palindrome {
        public static boolean isPalindrome(int num){
            int reverse = 0, temp = num;
            while(num > 0){
                reverse = reverse * 10 + num % 10;
                num = num / 10;
                }
                return reverse == temp;

        }
        public static void main(String[] args) {
            int num = 121;
            boolean result = isPalindrome(num);
            if(result){
                System.out.println("The number is a palindrome");
            } else {
                System.out.println("The number is not a palindrome");
            }
        }
    }
```

### 10. Triengle Pattern.

```java
    package Java.pattern;

    class Star {
        public static void main(String[] args) {
        for(int i =1; i<=10; i++) {
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
        }
    }


// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
```

### 11. Inverted Triangle Pattern.

```java
    package Java.pattern;

    public class InvertedStar {
        public static void main(String[] args) {
            for(int i =1; i<=5; i++){
                for(int j = 5; j>=i; j--){
                    System.out.print("*");
                }
                System.out.println();
            }
        }
    }


// *****
// ****
// ***
// **
// *
```

### 12. HollowRectangle Pattern.

```java
    package Java.pattern;

    public class HollowRectangle {
        public static void main(String[] args) {
            int n = 10;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    if (i == 1 || i == n || j == 1 || j == n){
                        System.out.print(" * ");
                    }

                    else {
                        System.out.print("   ");
                        
                    }
                }
                System.out.println();
            }
        }
    }


// *  *  *  *  *  *  *  *  *  * 
// *                          * 
// *                          * 
// *                          * 
// *                          * 
// *                          * 
// *                          * 
// *                          * 
// *                          * 
// *  *  *  *  *  *  *  *  *  * 
```

### 13. InSideHollowCross Pattern.

```java
    package Java.pattern;

    public class InSideHollowCross {
        public static void main(String[] args) {
            int n = 15;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    if (i == 1 || i == n || j == 1 || j == n) {
                        System.out.print(" * ");
                    } else if (i == j || i + j == n + 1) {
                        System.out.print(" * ");
                    } else {
                        System.out.print("   ");
                    }
                }
                System.out.println();
            }
        }
    }



// *  *  *  *  *  *  *  *  *  *  *  *  *  *  * 
// *  *                                   *  *
// *     *                             *     *
// *        *                       *        *
// *           *                 *           *
// *              *           *              *
// *                 *     *                 *
// *                    *                    *
// *                 *     *                 *
// *              *           *              * 
// *           *                 *           *
// *        *                       *        *
// *     *                             *     *
// *  *                                   *  *
// *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
```

### 14. InSideHollowRect Pattern.

```java
    package Java.pattern;

    public class InsideHollowRect {
        public static void main(String[] args) {
            int n = 15; 
            int middleStart = 5; 
            int middleEnd = n - 4; 
            int innerStart = 7; 
            int innerEnd = n - 6; 

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
```

### 15. HalfPyramid Using Number.

```java
    package Java.pattern;

    public class HalfPyramid {
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= i; j++) {
                    System.out.print(j);
                }
                System.out.println();
            }
        }
    }


// 1
// 12
// 123
// 1234
// 12345

```

### 16. RotatedHalfPyramid.

```java
    package Java.pattern;

    public class RotatedHalfPyramid {
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print("  ");
                }
                for (int j = 1; j <= i; j++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
        }
    }

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
```

### 17. Inverted Half Pyramid with Number.

```java
    public class InvertHalfPyramidNum{
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n + 1 -i; j++) {
                    System.out.print(j + " ");
                }
                System.out.println();
            }    
        }
    }


    // 1 2 3 4 5 
    // 1 2 3 4
    // 1 2 3
    // 1 2
    // 1
```

### 18. Floyd's Triangle

```java
    public class FloydsTriangle {
        public static void main(String[] args) {
            int n = 5;
            int i, j, k = 1;
            for (i = 1; i <= n; i++) {
                for (j = 1; j <= i; j++) {
                    System.out.print(k + " ");
                    k++;
                }
                System.out.println();
            }

        }
    }

    // 1 
    // 2 3
    // 4 5 6
    // 7 8 9 10
    // 11 12 13 14 15
```

### 19. 01 Triangle Pattern.

```java
    public class Triangle_01 {
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= i; j++) {
                    if((i+j) % 2 == 0){
                        System.out.print("1");
                    } else{
                        System.out.print("0");
                    }
                    
                }
                System.out.println();
            }
        }
    }

    // 1
    // 01
    // 101
    // 0101
    // 10101
```

### 20. Butterfly Pattern.

```java
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
```

### 21. Solid Rhombus Pattern.

```java
    public class SolidRhombus {
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n-i; j++) {
                    System.out.print("  ");
                }
                for (int j = 1; j <= i; j++) {
                    System.out.print("* ");
                }
                for (int j = 1; j <= n-i; j++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
        }
    }


    //     * * * * * 
    //    * * * * *
    //   * * * * *
    //  * * * * *
    // * * * * *
```

### 22. Hollow Rhombus Pattern.

```java
    public class HollowRhombus {
        public static void main(String[] args) {
            int n = 5;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n -i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= n; j++) {
                    if (i == 1 || i == n || j == 1 || j == n){
                        System.out.print("* ");
                    }
                    else {
                        System.out.print("  ");
                    }
                }
                System.out.println();
            }
        }
    }


    //         * * * * * 
    //       *       *
    //     *       *
    //   *       *
    // * * * * *`
```

### 23. Diamond Pattern.

```java
    public class DiamondPattern {
        public static void main(String[] args) {
            int n = 5;
            // UP Side
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print("  ");
                }
                for (int j = 1; j <= 2* i-1; j++){
                    System.out.print(" *");
                }
                System.out.println();
            }

            // DOWN Side
            for (int i = n; i >= 1; i--) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print("  ");
                }
                for (int j = 1; j <= 2* i-1; j++){
                    System.out.print(" *");
                }
                System.out.println();
            }
        }
    }


    //   *
    // * * *
    //   *

```

### 24. Number Pyramid.

```java
    public class NumberPyramid {
        public static void main(String[] args) {
            int n = 5;
            int count = 1;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n- i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= i; j++) {
                    System.out.print(count + " ");
                }
                count++;
                System.out.println();
            }
        }
    }


    //     1 
    //    2 2
    //   3 3 3
    //  4 4 4 4
    // 5 5 5 5 5
```