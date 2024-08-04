function SumOfSubArray(){
   var arr = [1,2,3,4,5,6,7,8]
   var sum;
   var max = 0;
   var subArray;
   for(var i = 0; i < arr.length; i++){
        for(var j = i; j< arr.length; j++){
            sum = 0;
            subArray =[]
            for(var k = i; j<= j; k++){
                subArray.push(arr[k])
            }
            console.log(subArray)
        }
   }
}

SumOfSubArray();