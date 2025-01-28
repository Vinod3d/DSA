## Recursion

Recursion is a concept in programming where a function calls itself to solve a smaller subproblem. This approach is particularly useful for problems that can be broken down into smaller, similar problems.

```js
    function countdown(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    countdown(n - 1);
    }

    countdown(5); // Output: 5, 4, 3, 2, 1
```

## Problems

### 1. Print Decending order number.

```js
    function printDecending(n){
        if(n<=0){
            return;
        }
    console.log(n)
    printDecending(n-1);
    }

    printDecending(10)
```

### 2. Print Ascending order number.

```js
    function printAscending(n ){
        if(n == 1){
            console.log(1);
            return
        }
        printAscending(n-1);
        console.log(n);
    }

    printAscending(10);
```

### 3. Factorial.

```java
    package jsDSA.recursion;

    public class factorial {

        public static int fact(int n){
            if(n==0 || n==1){
                return 1;
            }

            return n * fact(n - 1);
        }

        public static void main(String[] args) {
            int n = 5;
            int result = fact(n);
            System.out.println("Factorial of " + n + " is: " + result);
        }
    }
```


### 4. Sum Of Natural number.

```js
    package jsDSA.recursion;

    public class sumOfN {
        public static int sumOfN(int n){
                if(n == 0){
                    return 0;
                }
                return n += sumOfN(n-1);
            }
            public static void main(String[] args) {
                int n = 5;
                int sum = sumOfN(n);
                System.out.println(sum);
        }
    }
```


### 5. fibonacchi

```js
    function fib(n) {
        if (n === 0 || n === 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    function printFibonacciSeries(n) {
        console.log(`Fibonacci Series up to ${n} terms:`);
        for (let i = 0; i < n; i++) {
            process.stdout.write(fib(i) + " ");
        }
        console.log();
    }

    let n = 10;
    printFibonacciSeries(n);
```

### 6. isSorted

```js
    function isSorted(arr, i){
        if(i === arr.length - 1){
            return true;
        }
        if(arr[i] > arr[i+1]){
            return false;
        }

        return isSorted(arr, i+1);

    }

    const arr = [1, 2, 3, 4, 5, 6];
    console.log(isSorted(arr, 0));
```

### 7. First Occurence of Element

```js
    function firstOccurence(arr, i){
        let find = 3;

        if (i >= arr.length) {
            return -1;
        }

        if(arr[i]  == find){
            return i;
        }

        return firstOccurence(arr, i + 1);
    }

    const arr = [1, 3, 4, 2, 6, 4, 3, 7];
    console.log(firstOccurence(arr, 0));
```


### 8. last Occurence

```js
    function lastOccurence(arr, i, lastOc = -1){
        let find = 5;

        if (i === arr.length) {
            return lastOc
        }

        if(arr[i] === find){
            lastOc = i;
        }
        

        return lastOccurence(arr , i+1, lastOc);

    }

    const arr = [1, 2, 4, 5, 6, 2, 4, 6, 1, 3, 5];
    console.log(lastOccurence(arr, 0))
```

### 9. Power of N

```js
    function powerN(x, n){
        if(n == 0){
            return 1;
        }

        return x * powerN(x, n-1);
    }

    console.log(powerN(2, 10))
```

```js
    function powerN(x, n) {
        if (n === 0) {
            return 1;
        }

        let halfPower = powerN(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return halfPower * halfPower;
        } else {
            return x * halfPower * halfPower;
        }
    }

    console.log(powerN(2, 10)); // Output: 1024
```


### 10. Tiling Problem

// using normal way

```js
    function tilingProblem(n){
        if(n === 0) return 1;
        if(n === 1) return 1;

        let ways = new Array(n +1).fill(0);
        ways[0] = 1;
        ways[1] = 1;

        for(let i = 2; i<=n; i++){
            ways[i] = ways[i - 1] + ways[i - 2];
        }

        return ways[n]
    }

    console.log(tilingProblem(4));
```

// Using Recursion

```js
    function tilingProblem(n){
        if(n === 0) return 1;
        if(n === 1) return 1;

        return tilingProblem(n - 1) + tilingProblem(n - 2);
    }

    console.log(tilingProblem(4));
```

### 11. Remove Duplicate from strings

```js
    function removeDuplicate(str, index = 0, result = ''){
        if(index === str.length){
            return result;
        }

        const currentChar = str[index];

        if(!result.includes(currentChar)){
            result += currentChar;
        }

        return removeDuplicate(str, index + 1, result)
    }

    const str = "aabbccdde";
    console.log(removeDuplicate(str));
```


### 12. Tower of Hanoi

```js
    function towerOfHanoi(n, source, destination, auxiliary){
        if (n === 1) {
            console.log(`Move disk 1 from ${source} to ${destination}`);
            return;
        }

        towerOfHanoi(n-1, source, auxiliary, destination);

        console.log(`Move disk ${n} from ${source} to ${destination}`);

        towerOfHanoi(n - 1, auxiliary, destination, source);
    }

    const numberOfDisks = 3;
    towerOfHanoi(numberOfDisks, "A", "C", "B");
```

### 13 Flat nested Array

```js
    const arr = [1, 4, 5, [4, 5, [6, [3]]]];

    function flat(data){
        const result = [];
        
        if(Array.isArray(data)){
            data.forEach(function(e){
                result.push(...flat(e));
            });
        } else {
            result.push(data)
        }
        
        return result
    }

    console.log(flat(arr));
```

### 14 Friend Pairing Problem

```js
    package jsDSA.recursion;

    public class Friend_Pairing {
        public static int friendParing(int n){
            if(n==1 || n==2){
                return n;
            }

            return friendParing(n-1) + (n-1) * friendParing(n-2);
        }
        public static void main(String[] args){
            System.out.println(friendParing(3));
        }
    }
```


### 15 Binary String

```js
    package jsDSA.recursion;

    public class binaryString {
        public static void printBinStrings(int n, int lastPlace, String str){
            if(n==0){
                System.out.println(str);
                return;
            }

            printBinStrings(n-1, 0, str+"0");

            if(lastPlace == 0){
                printBinStrings(n-1, 1, str+"1");
            }

        }
        public static void main(String[] args) {
            printBinStrings(3, 0, "");
        }
    }
```

### 16 FindOccurence

```java
    public class FindOccurrences {

        public static void findOccurrences(int[] arr, int target, int index) {
            if (index == arr.length) {
                return;
            }

            if (arr[index] == target) {
                System.out.print(index + " ");
            }

            findOccurrences(arr, target, index + 1);
        }

        public static void main(String[] args) {
            int[] arr = {3, 2, 4, 5, 6, 2, 7, 2, 2};
            int target = 2;
            System.out.println("The occurrences of " + target + " are at indices:");
            findOccurrences(arr, target, 0);
        }
    }
```