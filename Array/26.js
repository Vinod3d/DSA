let arr = [1, 2, 3, 4, 5];

function deleteLastElement(array) {
    if (array.length > 0) {
        array.length = array.length - 1; 
    }
}

console.log("Before:", arr);

deleteLastElement(arr);

console.log("After:", arr);
