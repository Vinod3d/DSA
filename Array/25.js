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