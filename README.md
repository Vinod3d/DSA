<!-- TOC -->

| No. | Topic |
| --- | ------ |
| 1 | [Check if A Number if prime or not.](#check-if-a-number-if-prime-or-not.) |
| 2 | [Write a program that reads a set of integers, and then prints the sum of the](#write-a-program-that-reads-a-set-of-integers,-and-then-prints-the-sum-of-the) |
| 3 | [Write a program to find the factorial of any number entered by the user.](#write-a-program-to-find-the-factorial-of-any-number-entered-by-the-user.) |
| 4 | [Write a program to print the multiplication table of a number N, entered by the](#write-a-program-to-print-the-multiplication-table-of-a-number-n,-entered-by-the) |
| 5 | [Swap Number without using third variable.](#swap-number-without-using-third-variable.) |
| 6 | [Prime Number in Range.](#prime-number-in-range.) |
| 7 | [Binary to Decimal.](#binary-to-decimal.) |
| 8 | [Decimal to Binary.](#decimal-to-binary.) |
| 9 | [Check if number is palindrome.](#check-if-number-is-palindrome.) |
| 10 | [Triengle Pattern.](#triengle-pattern.) |
| 11 | [Inverted Triangle Pattern.](#inverted-triangle-pattern.) |
| 12 | [HollowRectangle Pattern.](#hollowrectangle-pattern.) |
| 13 | [InSideHollowCross Pattern.](#insidehollowcross-pattern.) |
| 14 | [InSideHollowRect Pattern.](#insidehollowrect-pattern.) |
| 15 | [HalfPyramid Using Number.](#halfpyramid-using-number.) |
| 16 | [RotatedHalfPyramid.](#rotatedhalfpyramid.) |
| 17 | [Inverted Half Pyramid with Number.](#inverted-half-pyramid-with-number.) |
| 18 | [Floyd's Triangle](#floyd's-triangle) |
| 19 | [01 Triangle Pattern.](#01-triangle-pattern.) |
| 20 | [Butterfly Pattern.](#butterfly-pattern.) |
| 21 | [Solid Rhombus Pattern.](#solid-rhombus-pattern.) |
| 22 | [Hollow Rhombus Pattern.](#hollow-rhombus-pattern.) |
| 23 | [Diamond Pattern.](#diamond-pattern.) |
| 24 | [Number Pyramid.](#number-pyramid.) |
| 25 | [Palindromic Pattern.](#palindromic-pattern.) |
| 26 | [Largest Number in Array.](#largest-number-in-array.) |
| 27 | [Min and Max In Array.](#min-and-max-in-array.) |
| 28 | [Reverse Array.](#reverse-array.) |
| 29 | [Reverse Array in Same Array.](#reverse-array-in-same-array.) |
| 30 | [Generates all possible pairs of elements in an array.](#generates-all-possible-pairs-of-elements-in-an-array.) |
| 31 | [Print Sub Array.](#print-sub-array.) |
| 32 | [Print Sum of Sub Array.](#print-sum-of-sub-array.) |
| 33 | [Max Sub Array Sum.](#max-sub-array-sum.) |
| 34 | [Max Sub Array.](#max-sub-array.) |
| 35 | [10, Kadans Algorithm.](#10,-kadans-algorithm.) |
| 36 | [Traping RainWater.](#traping-rainwater.) |
| 37 | [Buy And Sell Stocks.](#buy-and-sell-stocks.) |
| 38 | [Bubble Sort](#bubble-sort) |
| 39 | [Selection Sort.](#selection-sort.) |
| 40 | [Insertion Sort.](#insertion-sort.) |
| 41 | [Counting Sort.](#counting-sort.) |
| 42 | [Find Longest word in string.](#find-longest-word-in-string.) |
| 43 | [hastagGenerator](#hastaggenerator) |
| 44 | [Count Charecter](#count-charecter) |
| 45 | [check isPalindrom](#check-ispalindrom) |
| 46 | [Second Largest Number in Array.](#second-largest-number-in-array.) |
| 47 | [Calculate Average of Array;](#calculate-average-of-array;) |
| 48 | [is Array are Equal.](#is-array-are-equal.) |
| 49 | [sum of digits.](#sum-of-digits.) |
| 50 | [Remove Duplicate from array.](#remove-duplicate-from-array.) |
| 51 | [count vovel in string](#count-vovel-in-string) |
| 52 | [find min value in array.](#find-min-value-in-array.) |
| 53 | [check is Power of two.](#check-is-power-of-two.) |
| 54 | [Change string into camel Case.](#change-string-into-camel-case.) |
| 55 | [Check char is UpperCase.](#check-char-is-uppercase.) |
| 56 | [match startwith char.](#match-startwith-char.) |
| 57 | [Revers the string.](#revers-the-string.) |

<!-- TOC END -->

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

```js
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        
        return n * factorial(n - 1);
    }

    const number = 5;
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
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

### 25. Palindromic Pattern.

```java
    public class PalindromicPattern {
        public static void main(String[] args) {
            int n = 5; 
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n-i; j++) {
                    System.out.print("  ");
                }
                for (int j = i; j >= 1; j--) {
                    System.out.print(j + " ");
                }
                for (int j = 2; j <= i; j++) {
                    System.out.print(j + " ");
                }
                System.out.println();
            }
        }
    }

//         1 
//       2 1 2 
//     3 2 1 2 3 
//   4 3 2 1 2 3 4 
// 5 4 3 2 1 2 3 4 5

```

### 26. Largest Number in Array.

```java
    package Java.Array;

    public class LargestNum {
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5};
            int max = arr[0];
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            System.out.println(max);
        }
    }

```

### 27. Min and Max In Array.

```java
    package Java.Array;

    public class MinMaxInArray {
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5};
            int min = Integer.MAX_VALUE;
            int max = Integer.MIN_VALUE;
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            System.out.println("Min: " + min + " Max: " + max);
        }
    }

```

### 28. Reverse Array.

```java
    package Java.Array;

    public class ReverseArray {
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5};
            int[] arr2 = new int[arr.length];
            int j = arr.length - 1;
            for (int i = 0; i < arr.length; i++) {
                arr2[j] = arr[i];
                j--;
            }
            for (int i = 0; i < arr2.length; i++) {
                System.out.println(arr2[i]);
            }
        }
    }

```

### 29. Reverse Array in Same Array.

```java
    package Java.Array;

    public class ReverseArrayInSame {
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};
            
            int n = arr.length;
            for(int i = 0; i< n/2; i++){
                int temp = arr[i];
                arr[i] = arr[n-i-1];
                arr[n-i-1] = temp;
            }
            for(int i = 0; i < n; i++){
                System.out.print(arr[i] + " ");
            }
        }
    }
```

### 30. Generates all possible pairs of elements in an array.

```js
    function pairsInArray(){
        let arr = [1, 2, 3, 4, 5]
        let pairs = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                pairs.push([arr[i], arr[j]])
            }
        }
        console.log(pairs)
    }

    pairsInArray();

    // Output: [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]]
```

### 31. Print Sub Array.
```js
function PrintSubArray() {
    var ts = 0;
    var arr = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j <= arr.length; j++) {
          var subArr = [];
            for (var k = i; k < j; k++) {
                subArr.push(arr[k]);
            }
            ts++
            console.log(subArr.join(" "))
        }
        
        console.log();
    }
    console.log("total subArrays =" + ts)
}
  
PrintSubArray();
  

PrintSubArray()

//   [ 1 ],
//   [ 1, 2 ],
//   [ 1, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5, 6 ],
```

### 32. Print Sum of Sub Array.

```js
    function SumOfSubArray(){
    var arr = [1,2,3];
    var subArray;
    var sum;
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            subArray = [];
            sum =0;
            for(var k = i; k<=j; k++){
                subArray.push(arr[k]);
                sum += arr[k]
            }
            console.log("Subarray:", subArray, "Sum:", sum);
        }

    }
}

SumOfSubArray();

// Subarray: [ 1 ] Sum: 1
// Subarray: [ 1, 2 ] Sum: 3
// Subarray: [ 1, 2, 3 ] Sum: 6
// Subarray: [ 2 ] Sum: 2
// Subarray: [ 2, 3 ] Sum: 5
// Subarray: [ 3 ] Sum: 3
```

### 33. Max Sub Array Sum.

```js
    function MaxSubArraySum(){
        var arr = [1,2,3,4,5,6,7,8]
        var subArray;
        var maxSubArray;
        var sum;
        var max = -Infinity;
        for(var i = 0; i<arr.length; i++){
            for(var j = i; j<arr.length; j++){
                sum = 0;
                subArray = [];
                for(var k = i; k<=j; k++){
                    subArray.push(arr[k]);
                    sum += arr[k];
            
                }
                if(max < sum){
                    max = sum;
                }
                console.log(subArray);
            }
        }
        console.log("max sum is :" + max);
    }

    MaxSubArraySum()
```

### 34. Max Sub Array.

```js
    function MaxSubArray() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        var subArray = [];
        var maxSubArray = [];
        var sum;
        var max = -Infinity;

        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j < arr.length; j++) {
                sum = 0;
                subArray = [];
                for (var k = i; k <= j; k++) {
                    subArray.push(arr[k]);
                    sum += arr[k];
                }
                if (max < sum) {
                    max = sum;
                    maxSubArray = subArray;  // save the subarray that gives the max sum
                }
            }
        }

        return maxSubArray;
    }

    console.log("Max subarray is: ", MaxSubArray());

    Max subarray is:  [
    1, 2, 3, 4,
    5, 6, 7, 8
    ]

```

### 35. 10, Kadans Algorithm.
 
```js
    function KadanAlgorithm(){
        var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
        var max = -Infinity;
        var sum = 0;
        for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
        if(sum<0){
            sum = 0;
        }

        max = Math.max(sum, max);
        }
        console.log("max sum is :" + max);
    }

    KadanAlgorithm()
```

### 36. Traping RainWater.

```js
    
    function TrappingRainWater(){
        var height = [4, 2, 0, 6, 3, 2, 5]
        var maxWater = 0;
        var length = height.length - 1;
        var left = 0;
        var right = length;
        var leftMax = 0;
        var rightMax = 0;

        while(left< right){

            if(height[left] < height[right]){
                if(height[left] >= leftMax){
                    leftMax = height[left];
                } else if(height[left]<leftMax){
                    maxWater += leftMax - height[left];
                }
                left++;
            } 
            
            else if(height[left]>height[right]){
                if(height[right] >= rightMax){
                    rightMax = height[right];
                } else if(height[right]<rightMax){
                    maxWater += rightMax - height[right];

                }
                right--
            }
        }
        console.log(maxWater);
    }

    TrappingRainWater()
```

### 37. Buy And Sell Stocks.

```js
    function BuyAndSellStocke(){
        let prices = [7,1,5,3,6,4];
        let maxProfit = 0;
        let minPrice = prices[0];
        for(let i = 1; i < prices.length; i++){
            let currentPrice = prices[i];
            let profit = currentPrice - minPrice;
            if(profit > maxProfit){
                maxProfit = profit;
            }
            if(currentPrice < minPrice){
                minPrice = currentPrice;
            }
        }
        console.log(maxProfit)
    }

    BuyAndSellStocke();
```

### 38. Bubble Sort

Bubble sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

[sorce video link](https://www.youtube.com/watch?v=o4bAoo_gFBU&list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D)

```js
    function BubbleSort() {
    let arr = [5, 7, 8, 1, 3, 2];
    let n = arr.length;
    let flag;

    for (let i = 0; i < n - 1; i++) {
        flag = 0;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = 1;  // Set flag to 1 if a swap occurred
            }
        }
        // If no swaps occurred, array is sorted, break the loop
        if (flag == 0) {
            break;
        }
    }
    console.log(arr);
}

BubbleSort();

```

### 39. Selection Sort.

Selection sort is a simple and intuitive comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the sorting order) element from the unsorted portion of the list and moving it to the beginning (or end) of the sorted portion.

[source](https://www.youtube.com/watch?v=9oWd4VJOwr0&list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D&index=3)

```js
function SelectionSort(){
    let arr = [64, 34, 25, 12, 22, 18, 9]
        let n = arr.length;
        for (let i = 0; i < n-1; i++) {
            let min_idx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[min_idx] > arr[j]) {
                    min_idx = j;
                }
            }
            // let temp = arr[i];
            // arr[i] = arr[min_idx];
            // arr[min_idx] = temp;

            [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]]
        }
        console.log(arr)
    }

    SelectionSort();
```

### 40. Insertion Sort.

Insertion Sort is a simple and intuitive comparison-based sorting algorithm that builds the final sorted array (or list) one item at a time. It is much like the way you might sort playing cards in your hands.

```js
    function InsertionSort(){
        let arr = [4, 6, 1, 9, 2];
        let n = arr.length;
        for(let i = 1; i<n; i++){
            let curr = arr[i]
            let prev = i -1;
            while(prev >= 0 && arr[prev] > curr){
                arr[prev + 1] = arr[prev];
                prev--
            }
            arr[prev + 1] = curr;
        }
        console.log(arr)
    }
    InsertionSort();
```

### 41. Counting Sort.

```js
    function CountingSort(){
        let arr = [4, 2, 2, 8, 3, 3, 1];
        let max = Math.max(...arr);

        let count = new Array(max + 1).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[arr[i]]++;
        }

        let j = 0 ;
        for (let i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr[j] = i;
                j++;
                count[i]--;
            }
        }

        console.log(arr)
    }

    CountingSort();
```
### 42. Find Longest word in string.

```js
const findLongestword = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let strArr = str.split(" ");

  // FIRST

  // strArr = strArr.sort((a, b)=> a.length - b.length);
  // return strArr.at(-1);

  // SECOND
  return strArr.reduce((accum, current) =>
    current.length > accum.length ? current : accum
  );
};

console.log(findLongestword("watch Video Hoolywood series on YouTube"));
```

### 43. hastagGenerator

```js
const hasTagGenerator = (str) => {
  const string = str.trim();
  if (string.length === 0) {
    return false;
  }

  const strArr = string.split(" ");
  const hasStr = strArr.reduce((acc, curr) => {
    const capitalizer = curr.at(0).toUpperCase() + curr.slice(1);
    return acc + capitalizer;
  }, "#");
  return hasStr;
};

console.log(hasTagGenerator("my heart is pure"));
```

### 44. Count Charecter

```js
const countCharecter = (str, char) => {
  let count = 0;
  const strArr = str.split("");
  // strArr.map((item, i)=>{
  //     if(item === char){
  //         count ++
  //     }
  // })

  const countChar = strArr.reduce((accu, curr) => {
    if (curr === char) {
      accu++;
    }
    return accu;
  }, 0);

  return countChar;
  // return `${char}` + " is " +  count + " times";
};

console.log(countCharecter("Missisippi", "i"));

console.log(countCharecter("Missisippi", "i"));
```
### 45. check isPalindrom

  ```js
    const isPalindrome = (str)=>{
      let strChar = str.toLowerCase().replace(/\W/g, "");
      let reversed = strChar.split("").reverse().join("");
      return str === reversed;
  }

  console.log(isPalindrome("racecar"));
```

### 46. Second Largest Number in Array.

```js
    function findSecondLargest(arr) {
        if(arr.length < 2){
            return null;
        }

        let largest = -Infinity;
        let secondLargest = -Infinity;

        for(let i = 0; i< arr.length; i++){
            if(arr[i] > largest){
                secondLargest = largest;
                largest = arr[i];
            }else if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i];
            }
        }

        if (secondLargest === -Infinity) {
            return null;
        }

        return secondLargest;
    }

    const numbers = [10, 5, 8, 20, 15];
    const result = findSecondLargest(numbers);
    console.log(`The second largest number is ${result}`);
```

### 47. Calculate Average of Array;

```js
    function calculatAverage(){
        const arr = [5, 8, 22, 12, 18];
        let total;
        const average = arr.reduce((acc, cur)=>{
        return total  = acc + cur;
        }, 0)

        return total/arr.length
    };

    console.log(
        calculatAverage()
    )
```

### 48. is Array are Equal.

```js
    function arrayAreEqual() {
    const arr = [5, 8, 22, 12, 18];
    const arr2 = [5, 22, 8, 12, 18];

    if (arr.length !== arr2.length) {
        return false;
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);

    // for (let i = 0; i < sortedArr.length; i++) {
    //     if (sortedArr[i] !== sortedArr2[i]) {
    //         return false;
    //     }
    // }

    return sortedArr.every((curVal, index)=> curVal === sortedArr2[index])
}

console.log(arrayAreEqual());
```

### 49. sum of digits.

```js
    function sumOfDigits(){
    let num = 49039;
    let arr = Array.from(String(num));
    let sum = arr.reduce((accu, cur)=> {
        return accu += parseInt(cur);
    },0);
    return sum
}

console.log(
    sumOfDigits()
)
```

```js
    function sumOfDigits() {
        let num = 49039;
        let sum = 0;

        while (num > 0) {
            let lastDigit = num % 10;
            sum += lastDigit;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    console.log(sumOfDigits());
```

### 50. Remove Duplicate from array.

```js
    function removeDuplicates(arr) {
        return arr.filter((value, index, self) => self.indexOf(value) === index);
    }

    const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 5];
    const uniqueNumbers = removeDuplicates(numbers);

    console.log(uniqueNumbers); 
    // Output: [1, 2, 3, 4, 5, 6, 7]

```

```js
    function removeDuplicates(arr) {
        let uniq = new Set(arr);
        return [...uniq];
    }

    const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 5];
    const uniqueNumbers = removeDuplicates(numbers);

    console.log(uniqueNumbers); 
    // Output: [1, 2, 3, 4, 5, 6, 7]
```

### 51. count vovel in string

**Count Vovel**

```js
function countVovel() {
  let str = "Hello, World!";
  str.toLowerCase;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVovel());
```

**Return Vovel**

```js
function returnVovel() {
  let str = "Hello, World!";
  let varr = ["a", "e", "i", "o", "u"];
  str.toLowerCase;
  let vovel = str.split("").filter((value) => varr.includes(value));
  return vovel;
}

console.log(returnVovel());

// [ 'e', 'o', 'o' ]
```

** How many times vovel appears**

```js
function returnVovel() {
  let str = "Hello, World!";
  let varr = ["a", "e", "i", "o", "u"];
  let vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  str.toLowerCase;
  let vovel = str.split("").filter((value) => varr.includes(value));

  for (v of vovel) {
    vowelCount[v] += 1;
  }

  return vowelCount;
}

console.log(returnVovel());
```

### 52. find min value in array.

```js
    function findMin(){
    const arr = [4, 12, 4, 1, -5, -2];
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]< min){
            min = arr[i];
        }
    }

    return min;
}

console.log(
    findMin()
)
```

### 53. check is Power of two.

```js
  const isPowerOfTwo = (num) =>{
      if(num <= 0){
          return false;
      }
      while(num % 2 === 0){
          num = num / 2;
      }
      return num === 1;

  }

  console.log(
      isPowerOfTwo(8)
  )
```

### 54. Change string into camel Case.

```js
  function toCamelCase(){
    let str = 'hello my friend';
    let arr = str.split(' ');
    let result = arr[0];
    for(let i = 1; i<arr.length; i++){
       result += arr[i].charAt(0).toUpperCase().padStart(2, "_") + arr[i].slice(1);
    }
    return result
  }


  console.log(
      toCamelCase()
  )
  // hello_My_Friend
```

### 55. Check char is UpperCase.

```js
  function isUpperCase(chr){
    let upper = ''
    if(chr.charCodeAt(0) >=65 && chr.charCodeAt(0) <= 90){
        return upper = 'uppercase'
    }else if (chr.charCodeAt(0) >=97 && chr.charCodeAt(0) <= 122){
        return upper = 'lowercase'
    } 
  }

  console.log(
      isUpperCase('C')
  )
```

### 56. match startwith char.

```js
  const startsWith = (str, substr) =>{
    return str.slice(0, substr.length) === substr;
}

console.log(
    startsWith('Hello world', 'Hello')
)
```

### 57. Revers the string.

```js
  function reverseStr(){
    let str = 'Vinod';
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
         reversedStr += str[i]
    }
    return reversedStr
  }

  console.log(
      reverseStr()
  )
```

### reapeat String.
```js
  function repeatString(str, num){
    let result = "";
      for(let i = 0; i<num; i++){
          result +=str
      }
      return result
  }


  console.log(
      
      repeatString('abc', 5)
  )
```

### truncate string.
```js
  function truncateString(str, num){
    return str.slice(0, num) + '...';
  }

  console.log(
    truncateString('Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night', 8)
  )
```


### find median value.
```js
    function findMedian(){
    const arr = [3, 3, 5, 9, 15];
    let res  = arr.length % 2 !== 0 ? "odd" : 'even';
    let val = ""
    if(res== 'odd'){
        mid = Math.ceil(arr.length / 2);
        return val = arr[mid - 1];
    } else if(res == 'even') {
        mid = arr.length/2;
        return val = (arr[mid - 1] + arr[mid]) / 2;
    }

    return val
}


console.log(
    findMedian()
)
```

### Count Accurence element in array.
```js
    // Method 1

// function countAccurence(){
//     let arr = [1, 2, 2, 3, 1, 4, 2];
//     let objKey = [...new Set(arr)];
    
//     let countObj = objKey.reduce((acc, curr) => {
//         acc[curr] = 0
//         return acc;
//     }, {})
    
//     for(let i = 0; i< arr.length; i++){
//         countObj[arr[i]] += 1;
//     }
//     return countObj
// }


// console.log(
//     countAccurence()
// )

// Method 2

function countAccurence(){
    let arr = [1, 2, 2, 3, 1, 4, 2];
    let counts = {};

    for(let elements of arr){
        counts[elements] = (counts[elements] || 0) + 1;
    }

    return counts;
}

console.log(
    countAccurence()
)

```

### find mode in array.
```js
    function findMode(){
    let arr = [1, 2, 2, 3, 1, 4, 2, 1, 1, 1, 4,4,4,4,4,  ]
    let counts = {};
    let maxCount = 0;
    let mode;

    for(let element of arr){
        counts[element] = (counts[element] || 0) + 1;
        if(counts[element] > maxCount){
             maxCount = counts[element]
             mode = element
        }
    }
    return mode
}


console.log(
    findMode()
)
```


### add item in end of array.

```js
    function addItemEnd(){
    let arr = [1, 2, 3, 4];
    arr[arr.length] = 5;
    return arr
}


console.log(
    addItemEnd()
)
```


### add item in start of array.
```js
    function addItemStart(){
    let arr = [1, 2, 3, 4]
    for(let i = arr.length; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = 5
    return arr

}

console.log(
    addItemStart()
)
```

### number range.

```js
    function numberRange(start, end){
        let arr = []
        let length = (end + 1) - (start +1)
        for(let i = 0; i<= length; i++){
            arr[i] = start;
            start++
        }

        return arr
    }

    console.log(
        numberRange(12, 20)
    )
```

### delete last element.
```js
    let arr = [1, 2, 3, 4, 5];

    function deleteLastElement(array) {
        if (array.length > 0) {
            array.length = array.length - 1; 
        }
    }

    console.log("Before:", arr);

    deleteLastElement(arr);

    console.log("After:", arr);
```


### delete first element.
```js
    let arr = [1, 2, 3, 4, 5];

function deleteFirstElement(array) {
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
}

console.log("Before:", arr);
deleteFirstElement(arr);
console.log("After:", arr);

```


### number Range Recursive.
```js
    let arr =[]
    function numberRangeRecursive(start, end){
        if(start <= end){
            arr.push(start);
            return numberRangeRecursive(start + 1, end )
        }

        return arr
    }


    console.log(
        numberRangeRecursive(0, 5)
    )
```

### Password Validation.

```js
    // function simplePasswordValidator(){
//     let password = 'Vinod123#$'
//     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
//     if (password.match(passwordRegex)) {
//         return true
//     } else{
//         return false
//     }
// }



function simplePasswordValidator(){
    let password = 'Vinod1253';
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for(let char of password){
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;  // Check for uppercase letter
        } 

        else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;  // Check for lowercase letter
        }

        else if (!isNaN(Number(char))) {
            hasNumber = true;  // Check for digit
        }
    }

    if (hasLowerCase && hasUpperCase && hasNumber && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}


console.log(
    simplePasswordValidator()
)
```

### Fibonacci 
```js
    function fibonacciSequence(num) {
        let sequence = [0, 1];

        for (let i = 2; i <= num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }

        return sequence.slice(0, num);
    }

    console.log(fibonacciSequence(5));

```

### Find sum and average of array element.
```js
    public class Average{
        public static void main(String[] args){
            int[] numbers = {1,2,3,4,5,6,7};
            int sum = 0;
            int avg = 0;
            for(int i = 0; i < numbers.length; i++){
                sum += numbers[i];
                }
                avg = sum / numbers.length;
                System.out.println("The average of the numbers is: " + avg);
                System.out.println("Sum of Number is" + sum);
        }
    }
```

### binary to Decimal.
```js
    function binaryToDecimal(n) {
        let ans = 0;
        let i = 0;
        
        while (n > 0) {
            let bit = n % 10;
            ans += bit * Math.pow(2, i);
            n = Math.floor(n / 10);
            i++;
        }
        
        return ans;
    }

    let binaryNumber = 111;
    let decimalNumber = binaryToDecimal(binaryNumber);
    console.log(decimalNumber);
```

### Calculate days between dates.

```js
    const calculateDaysBetweenDates = (d1, d2)=>{
        let date1 = new Date(d1)
        let date2 = new Date(d2)

        let diff = Math.abs(date1 - date2)
        return diff / (24 * 60 * 60 * 1000)
    };

    console.log(
        calculateDaysBetweenDates("2024-01-01", "2024-01-31")
    )
```

### Calculate Age.

```js
    const calculateAge = (year, month, day)=>{
    const today = new Date()
    const birthDate = new Date(year, month - 1, day);


    const age = today.getFullYear() - birthDate.getFullYear();
    const monthdiff = today.getMonth() - birthDate.getMonth();
    const daydiff = today.getDate() - birthDate.getDate();

    if(monthdiff < 0 || (monthdiff === 0 && daydiff <  birthDate.getDate())){
        age--
    }

    return `Your Age is ${age} years ${monthdiff} month ${daydiff}`
}


console.log(calculateAge(1999, 7, 11))
```

### reapeat String.
```js
  function repeatString(str, num){
    let result = "";
      for(let i = 0; i<num; i++){
          result +=str
      }
      return result
  }


  console.log(
      
      repeatString('abc', 5)
  )
```

### truncate string.
```js
  function truncateString(str, num){
    return str.slice(0, num) + '...';
  }

  console.log(
    truncateString('Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night', 8)
  )
```

### random color hex code.

```js
  const randomHexColor = ()=>{
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    }

    console.log(
        randomHexColor()
    )
```

### generate bar chart.

```js
  // const generateBarChart = (arr) =>{
//     let bar = ''
//     const newArr = arr.map((currElem, index)=>{
//         console.log(`${index + 1}:  ${bar.padEnd(currElem, '*')}`)
//     })
// }

// console.log(
//     generateBarChart([5, 3, 9, 2])
// )


const generateBarChart = (arr) =>{
    const newArr = arr.map((curEle, index)=>{
        let star = "";
        let number = 0;
        while(number< curEle){
             star = star + "*";
             number++
        }
        return `${index + 1}: ${star}`;
    })

    return newArr.join("\n")
  }

  console.log(
      generateBarChart([5, 3, 9, 2])
  )
```