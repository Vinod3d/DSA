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
        console.log(prev)
        arr[prev + 1] = curr;
    }
    console.log(arr)
}
InsertionSort();