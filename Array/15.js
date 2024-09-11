function arrayAreEqual() {
    const arr = [5, 8, 22, 12, 18];
    const arr2 = [5, 22, 8, 12, 18];

    if (arr.length !== arr2.length) {
        return false;
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);

    // for (let i = 0; i < sortedArr.length; i++) {
    //     if (sortedArr[i] !== sortedArr2[i]) {
    //         return false;
    //     }
    // }

    return sortedArr.every((curVal, index)=> curVal === sortedArr2[index])

    
}

console.log(arrayAreEqual());