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