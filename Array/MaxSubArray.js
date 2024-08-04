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
