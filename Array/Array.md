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