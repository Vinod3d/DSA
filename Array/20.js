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