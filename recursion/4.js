function firstOccurence(arr, i){
    let find = 3;

    if (i >= arr.length) {
        return -1;
    }

    if(arr[i]  == find){
        return i;
    }

    return firstOccurence(arr, i + 1);
}

const arr = [1, 3, 4, 2, 6, 4, 3, 7];
console.log(firstOccurence(arr, 0));