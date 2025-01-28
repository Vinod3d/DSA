function lastOccurence(arr, i, lastOc = -1){
    let find = 5;

    if (i === arr.length) {
        return lastOc
    }

    if(arr[i] === find){
        lastOc = i;
    }
    

    return lastOccurence(arr , i+1, lastOc);

}

const arr = [1, 2, 4, 5, 6, 2, 4, 6, 1, 3, 5];
console.log(lastOccurence(arr, 0))