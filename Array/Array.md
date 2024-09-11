## Array Questions For DSA

### 1. Largest Number in Array.

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

### 2. Min and Max In Array.

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

### 3. Reverse Array.

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

### 4. Reverse Array in Same Array.

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

### 5. Generates all possible pairs of elements in an array.

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

### 6. Print Sub Array.
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

### 7. Print Sum of Sub Array.

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

### 8. Max Sub Array Sum.

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

### 9. Max Sub Array.

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

### 10, Kadans Algorithm.
 
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

### 11. Traping RainWater.

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

### 12. Buy And Sell Stocks.

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

### 13. Second Largest Number in Array.

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

### 14. Calculate Average of Array;

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

### 15. is Array are Equal.

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


### 16. sum of digits.

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

### 17. Remove Duplicate from array.

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

### 18. Sum of Square.

```js
    function sumOfSquares(){
        const arr = [5, 4, 2, 1];
        const sum = arr.reduce((accu, curr)=>accu+= (curr*curr),0)
        return sum;
    }


    console.log(
        sumOfSquares()
    )
```

### 19. find min value in array.

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

### 20. find median value.
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

### 21. Count Accurence element in array.
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

### 22. find mode in array.
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


### 23. add item in end of array.

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


### 24. add item in start of array.
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

### 25. number range.

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

### 26. delete last element.
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


### 27. delete first element.
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


### 28. number Range Recursive.
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