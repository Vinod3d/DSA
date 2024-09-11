let arr = [1, 2, 3, 4, 5];

function deleteFirstElement(array) {
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
}

console.log("Before:", arr);
deleteFirstElement(arr);
console.log("After:", arr);
