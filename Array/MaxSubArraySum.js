// ===Method 1=====


// function MaxSubArraySum(){
//     var arr = [1,2,3,4,5,6,7,8]
//     var subArray;
//     var maxSubArray;
//     var sum;
//     var max = -Infinity;
//     for(var i = 0; i<arr.length; i++){
//         for(var j = i; j<arr.length; j++){
//             sum = 0;
//             subArray = [];
//             for(var k = i; k<=j; k++){
//                 subArray.push(arr[k]);
//                 sum += arr[k];
        
//             }
//             if(max < sum){
//                 max = sum;
//             }
//             console.log(subArray);
//         }
//     }
//     console.log("max sum is :" + max);
// }


// MaxSubArraySum()




// ===Method 1 Prefix Sum=====


// function MaxSubArraySum2(){
//     var arr = [1,2,3,4,5,6,7,8]
//     var subArray;
//     var sum;
//     var max = -Infinity;
//     var prefix = [];

//     prefix[0] = arr[0];

//     for(var i = 1; i<arr.length; i++){
//         prefix[i] = prefix[i-1] + arr[i];
//     }


//     for(var i = 0; i<arr.length; i++){
//         var start = i;
//         for(var j = i; j<arr.length; j++){
//             var end = j;
//             sum = start == 0 ? prefix[end] : prefix[end] - prefix[start];
           
            
//             if(max < sum){
//                 max = sum;
//             }
//         }
//     }
//     console.log("max sum is :" + max);
// }


// MaxSubArraySum2()


// ===Method 3 Prefix Sum=====
// Kadan Algorithm

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