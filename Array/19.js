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