function PrintSubArray() {
    var ts = 0;
    var arr = [1, 2, 3];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j <= arr.length; j++) {
          var subArr = [];
            for (var k = i; k <= j; k++) {
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
  