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