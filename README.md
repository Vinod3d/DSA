# String

### 1. reverse string.

```js
function reverseStr() {
  let str = "Vinod";
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseStr());
```

### 2. Check palindrome.

for Number

```js
function isNumberPalindrome(num) {
  if (num < 0) return false; // Negative numbers can't be palindromes
  let reversed = 0;
  let original = num;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed === original;
}

// Test cases
console.log(isNumberPalindrome(121)); // true
console.log(isNumberPalindrome(123)); // false
console.log(isNumberPalindrome(1331)); // true
console.log(isNumberPalindrome(-121)); // false
```

for String

```js
function isPalindrom(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrom("racecar"));
```

### 3. count vovel in string

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

  // Convert to lowercase (you missed the parentheses)
  str = str.toLowerCase();

  let vovel = str.split("").filter((value) => varr.includes(value));

  // Use reduce to count vowels and calculate total
  const total = vovel.reduce((acc, v) => {
    vowelCount[v] += 1;
    return acc + 1;
  }, 0);

  return { vowelCount, total };
}

console.log(returnVovel());
```

### 4. Write a program to find the factorial of any number entered by the user.

```js
function factorial(num) {
  if (num < 0) return "Undefined (Negative!)";
  if (num == 0 || num == 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(5));
```

### 5. Check if A Number if prime or not.

```js
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const num = 29;

if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}
```

### 6. find smallest, secondSmallest, largest and secondLargest number in array.

```js
  function findStats(arr) {
    if (arr.length < 2) return "Array too small";

    let min = Infinity, secondMin = Infinity;
    let max = -Infinity, secondMax = -Infinity;

    for (const num of arr) {
        // Update max and secondMax
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }

        // Update min and secondMin
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
    }

    return {
        smallest: min,
        secondSmallest: secondMin === Infinity ? null : secondMin,
        largest: max,
        secondLargest: secondMax === -Infinity ? null : secondMax,
    };
}

const arr = [12, 5, 7, 17, 8, 0, -1];
console.log(findStats(arr));
```

### 7. Write a program that reads a set of integers, and then prints the sum of the even and odd integers.

```js
function sumEvenOdd(numbers) {
  let sumEven = 0;
  let sumOdd = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  return { sumEven, sumOdd };
}

const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const { sumEven, sumOdd } = sumEvenOdd(inputNumbers);

console.log(`Sum of even integers: ${sumEven}`);
console.log(`Sum of odd integers: ${sumOdd}`);
```

### 8. Remove Duplicate from array.

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

### 9. Write a program to print the multiplication table of a number N, entered by the user.

```js
function printMultiplicationTable(N) {
  console.log(`Multiplication Table for ${N}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${N} x ${i} = ${N * i}`);
  }
}

const number = parseInt(prompt("Enter a number: "), 10);

if (!isNaN(number)) {
  printMultiplicationTable(number);
} else {
  console.log("Please enter a valid number.");
}
```

### 10. Swap Number without using third variable.

```js
function swap() {
  let a = 10,
    b = 20;
  console.log(`Before swapping: a = ${a}, b = ${b}`);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`After swapping: a = ${a}, b = ${b}`);
}

swap();
```

### 11.  Check if two strings are anagrams.

```js
  function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```

### 12. Merge two sorted arrays into a single sorted array.

```js
  function mergeSortedArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    let mergedArray = [];
    
    while(i < arr1[i] && j < arr2[j]){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++
        }
    }
    
      // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
    
    return mergedArray;
}

console.log(mergeSortedArrays([], [1, 2, 3]));  // [1, 2, 3]
```

### 13. Find the missing number in an array (e.g., [1, 2, 4, 5] → 3).

```js
  function findMissingNumber(arr) {
  let n = arr.length + 1; 
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));  // आउटपुट: 3
console.log(findMissingNumber([1, 3, 4, 5, 6]));  // आउटपुट: 2
console.log(findMissingNumber([2, 3, 4, 5]));  // आउटपुट: 1

```

### 14.  Find the first non-repeating character in a string.

```js
function firstNonRepeatingChar(str){
    let charCount = {};
    
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for(let char of str){
        if(charCount[char] === 1){
            return char;
        }
    }
    return null
}

console.log(firstNonRepeatingChar("swiss"));   // 'w'
```

### 15. Find all pairs in an array that sum up to a given number.

```js
  function findPairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7));
// Output: [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]

```

```js
  function findPairsOptimized(arr, target) {
  let seen = new Set();
  let result = [];

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    }
    seen.add(num);
  }

  return result;
}

console.log(findPairsOptimized([1, 2, 3, 4, 5, 6], 7));
// Output: [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]

```

### 16 flate nested Array.

```js
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // recursive call
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5]]));
// Output: [1, 2, 3, 4, 5]

```

### 17. Group anagrams together from an array of words.

```js
  function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

// Example usage:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

```

### 18. Convert a given number into words.

```js

function numberToWords(num){
  if(num === 0) return "Zero";
  
   const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                       "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                       "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const thousands = ["", "Thousand", "Million", "Billion"];
  
  function helper(n){
    if (n === 0) return "";
    else if (n < 20) return belowTwenty[n] + " ";
    else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
    else return belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
  }
  
  let res = "";
  let i = 0;
  
  while(num > 0){
    if(num % 1000 !==0){
      res = helper(num % 1000) + thousands[i] + " " + res;
    }
    num = Math.floor(num / 1000)
    i++;
  }
  return res.trim()
}

console.log(numberToWords(1005));
```


### 19. Deep clone an object without using JSON.stringify.

```js
  
function deepClone(obj){
  if(obj === null || typeof obj !== "object"){
    return obj;
  }
  
    if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  const clonedObj = {};
  
  for(let key in obj){
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  
  return clonedObj
}



const original = {
  name: "Vinod",
  age: 25,
  skills: ["JS", "React"],
  address: {
    city: "Bilaspur",
    pin: 495001
  }
};

const cloned = deepClone(original);



cloned.name = "Chandra";
cloned.skills.push("Node.js");
cloned.address.city = "Nashik";

console.log("Original:", original);
console.log("Cloned:", cloned);
```
















### 6. Prime Number in Range.

```js
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeInRange(start, end) {
  console.log(`Prime numbers between ${start} and ${end}:`);
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

const startRange = 10;
const endRange = 50;

primeInRange(startRange, endRange);
```

### 7. Binary to Decimal.

```js
function binaryToDecimal(n) {
  let ans = 0;
  let i = 0;

  while (n > 0) {
    const bit = n % 10;
    ans += bit * Math.pow(2, i);
    n = Math.floor(n / 10);
    i++;
  }

  return ans;
}

const binaryNumber = 111;
const decimalValue = binaryToDecimal(binaryNumber);
console.log(decimalValue);
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
function pairsInArray() {
  let arr = [1, 2, 3, 4, 5];
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  console.log(pairs);
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
    for (var j = i + 1; j <= arr.length; j++) {
      var subArr = [];
      for (var k = i; k < j; k++) {
        subArr.push(arr[k]);
      }
      ts++;
      console.log(subArr.join(" "));
    }

    console.log();
  }
  console.log("total subArrays =" + ts);
}

PrintSubArray();

PrintSubArray();

//   [ 1 ],
//   [ 1, 2 ],
//   [ 1, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5, 6 ],
```

### 32. Print Sum of Sub Array.

```js
function SumOfSubArray() {
  var arr = [1, 2, 3];
  var subArray;
  var sum;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      subArray = [];
      sum = 0;
      for (var k = i; k <= j; k++) {
        subArray.push(arr[k]);
        sum += arr[k];
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
function MaxSubArraySum() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  var subArray;
  var maxSubArray;
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
      }
      console.log(subArray);
    }
  }
  console.log("max sum is :" + max);
}

MaxSubArraySum();
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
function KadanAlgorithm() {
  var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
  var max = -Infinity;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum < 0) {
      sum = 0;
    }

    max = Math.max(sum, max);
  }
  console.log("max sum is :" + max);
}

KadanAlgorithm();
```

### 36. Traping RainWater.

```js
function TrappingRainWater() {
  var height = [4, 2, 0, 6, 3, 2, 5];
  var maxWater = 0;
  var length = height.length - 1;
  var left = 0;
  var right = length;
  var leftMax = 0;
  var rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else if (height[left] < leftMax) {
        maxWater += leftMax - height[left];
      }
      left++;
    } else if (height[left] > height[right]) {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else if (height[right] < rightMax) {
        maxWater += rightMax - height[right];
      }
      right--;
    }
  }
  console.log(maxWater);
}

TrappingRainWater();
```

### 37. Buy And Sell Stocks.

```js
function BuyAndSellStocke() {
  let prices = [7, 1, 5, 3, 6, 4];
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let profit = currentPrice - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  console.log(maxProfit);
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
        flag = 1; // Set flag to 1 if a swap occurred
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
function SelectionSort() {
  let arr = [64, 34, 25, 12, 22, 18, 9];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min_idx] > arr[j]) {
        min_idx = j;
      }
    }
    // let temp = arr[i];
    // arr[i] = arr[min_idx];
    // arr[min_idx] = temp;

    [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
  }
  console.log(arr);
}

SelectionSort();
```

### 40. Insertion Sort.

Insertion Sort is a simple and intuitive comparison-based sorting algorithm that builds the final sorted array (or list) one item at a time. It is much like the way you might sort playing cards in your hands.

```js
function InsertionSort() {
  let arr = [4, 6, 1, 9, 2];
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  console.log(arr);
}
InsertionSort();
```

### 41. Counting Sort.

```js
function CountingSort() {
  let arr = [4, 2, 2, 8, 3, 3, 1];
  let max = Math.max(...arr);

  let count = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  let j = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }

  console.log(arr);
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
const isPalindrome = (str) => {
  let strChar = str.toLowerCase().replace(/\W/g, "");
  let reversed = strChar.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("racecar"));
```



### 47. Calculate Average of Array;

```js
function calculatAverage() {
  const arr = [5, 8, 22, 12, 18];
  let total;
  const average = arr.reduce((acc, cur) => {
    return (total = acc + cur);
  }, 0);

  return total / arr.length;
}

console.log(calculatAverage());
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

  return sortedArr.every((curVal, index) => curVal === sortedArr2[index]);
}

console.log(arrayAreEqual());
```

### 49. sum of digits.

```js
function sumOfDigits() {
  let num = 49039;
  let arr = Array.from(String(num));
  let sum = arr.reduce((accu, cur) => {
    return (accu += parseInt(cur));
  }, 0);
  return sum;
}

console.log(sumOfDigits());
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



### 53. check is Power of two.

```js
const isPowerOfTwo = (num) => {
  if (num <= 0) {
    return false;
  }
  while (num % 2 === 0) {
    num = num / 2;
  }
  return num === 1;
};

console.log(isPowerOfTwo(8));
```

### 54. Change string into camel Case.

```js
function toCamelCase() {
  let str = "hello my friend";
  let arr = str.split(" ");
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase().padStart(2, "_") + arr[i].slice(1);
  }
  return result;
}

console.log(toCamelCase());
// hello_My_Friend
```

### 55. Check char is UpperCase.

```js
function isUpperCase(chr) {
  let upper = "";
  if (chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) <= 90) {
    return (upper = "uppercase");
  } else if (chr.charCodeAt(0) >= 97 && chr.charCodeAt(0) <= 122) {
    return (upper = "lowercase");
  }
}

console.log(isUpperCase("C"));
```

### 56. match startwith char.

```js
const startsWith = (str, substr) => {
  return str.slice(0, substr.length) === substr;
};

console.log(startsWith("Hello world", "Hello"));
```

### 58. reapeat String.

```js
function repeatString(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatString("abc", 5));
```

### 59. truncate string.

```js
function truncateString(str, num) {
  return str.slice(0, num) + "...";
}

console.log(
  truncateString(
    "Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night",
    8
  )
);
```

### 60. find median value.

```js
function findMedian() {
  const arr = [3, 3, 5, 9, 15];
  let res = arr.length % 2 !== 0 ? "odd" : "even";
  let val = "";
  if (res == "odd") {
    mid = Math.ceil(arr.length / 2);
    return (val = arr[mid - 1]);
  } else if (res == "even") {
    mid = arr.length / 2;
    return (val = (arr[mid - 1] + arr[mid]) / 2);
  }

  return val;
}

console.log(findMedian());
```

### 61. Count Accurence element in array.

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

function countAccurence() {
  let arr = [1, 2, 2, 3, 1, 4, 2];
  let counts = {};

  for (let elements of arr) {
    counts[elements] = (counts[elements] || 0) + 1;
  }

  return counts;
}

console.log(countAccurence());
```

### 62. find mode in array.

```js
function findMode() {
  let arr = [1, 2, 2, 3, 1, 4, 2, 1, 1, 1, 4, 4, 4, 4, 4];
  let counts = {};
  let maxCount = 0;
  let mode;

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mode = element;
    }
  }
  return mode;
}

console.log(findMode());
```

### 63. add item in end of array.

```js
function addItemEnd() {
  let arr = [1, 2, 3, 4];
  arr[arr.length] = 5;
  return arr;
}

console.log(addItemEnd());
```

### 64. add item in start of array.

```js
function addItemStart() {
  let arr = [1, 2, 3, 4];
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = 5;
  return arr;
}

console.log(addItemStart());
```

### 65. number range.

```js
function numberRange(start, end) {
  let arr = [];
  let length = end + 1 - (start + 1);
  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }

  return arr;
}

console.log(numberRange(12, 20));
```

### 66. delete last element.

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

### 67. delete first element.

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

### 68. number Range Recursive.

```js
let arr = [];
function numberRangeRecursive(start, end) {
  if (start <= end) {
    arr.push(start);
    return numberRangeRecursive(start + 1, end);
  }

  return arr;
}

console.log(numberRangeRecursive(0, 5));
```

### 69. Password Validation.

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

function simplePasswordValidator() {
  let password = "Vinod1253";
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;

  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true; // Check for uppercase letter
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true; // Check for lowercase letter
    } else if (!isNaN(Number(char))) {
      hasNumber = true; // Check for digit
    }
  }

  if (hasLowerCase && hasUpperCase && hasNumber && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

console.log(simplePasswordValidator());
```

### 70. Fibonacci

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

### 71. Find sum and average of array element.

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

### 72. binary to Decimal.

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

### 73. Calculate days between dates.

```js
const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let diff = Math.abs(date1 - date2);
  return diff / (24 * 60 * 60 * 1000);
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));
```

### 74. Calculate Age.

```js
const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthdiff = today.getMonth() - birthDate.getMonth();
  const daydiff = today.getDate() - birthDate.getDate();

  if (monthdiff < 0 || (monthdiff === 0 && daydiff < birthDate.getDate())) {
    age--;
  }

  return `Your Age is ${age} years ${monthdiff} month ${daydiff}`;
};

console.log(calculateAge(1999, 7, 11));
```

### 75. reapeat String.

```js
function repeatString(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatString("abc", 5));
```

### 76. truncate string.

```js
function truncateString(str, num) {
  return str.slice(0, num) + "...";
}

console.log(
  truncateString(
    "Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night",
    8
  )
);
```

### 77. random color hex code.

```js
const randomHexColor = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
};

console.log(randomHexColor());
```

### 78. generate bar chart.

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

const generateBarChart = (arr) => {
  const newArr = arr.map((curEle, index) => {
    let star = "";
    let number = 0;
    while (number < curEle) {
      star = star + "*";
      number++;
    }
    return `${index + 1}: ${star}`;
  });

  return newArr.join("\n");
};

console.log(generateBarChart([5, 3, 9, 2]));
```

### 79. Convert Currency.

```js
const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110.53,
  AUD: 1.45,
  INR: 82.75,
};

document.getElementById("convertBtn").addEventListener("click", () => {
  const amount = parseFloat(prompt("Enter the amount:"));
  const fromCurrency = prompt(
    "Enter the currency (USD, EUR, GBP, JPY, AUD, INR):"
  ).toUpperCase();

  if (isNaN(amount) || !currencyRates[fromCurrency]) {
    alert("Invalid amount or currency");
    return;
  }

  const convertedAmounts = convertCurrency(amount, fromCurrency, currencyRates);
  displayResults(amount, fromCurrency, convertedAmounts);
});

function convertCurrency(amount, fromCurrency, rates) {
  const amountInUSD = amount / rates[fromCurrency];
  const convertedAmounts = {};

  for (const [currency, rate] of Object.entries(rates)) {
    convertedAmounts[currency] = amountInUSD * rate;
  }

  return convertedAmounts;
}

function displayResults(amount, fromCurrency, results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<h2>Converted amounts for ${amount} ${fromCurrency}:</h2>`;

  for (const [currency, value] of Object.entries(results)) {
    resultsDiv.innerHTML += `<p>${currency}: ${value.toFixed(2)}</p>`;
  }
}
```



### 81. Search Sorted Array.

```js
function searchSortedMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // start from top right corner

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return [row, col];
    } else if (target < matrix[row][col]) {
      col--;
    } else {
      row++;
    }
  }
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

let target = 14;
console.log(searchSortedMatrix(matrix, target));
```

### 82. Suffle Array Element

```js
const arr = [1, 2, 3, 4, 5];

function shuffle(data) {
  return data
    .map(function (a) {
      return {
        value: a,
        random: Math.random(),
      };
    })
    .sort(function (a, b) {
      return a.random - b.random;
    })
    .map(function (d) {
      return d.value;
    });
}

console.log(shuffle(arr));
```
