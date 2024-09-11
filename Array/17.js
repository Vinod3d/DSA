// function removeDuplicates(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
// }

// const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 5];
// const uniqueNumbers = removeDuplicates(numbers);

// console.log(uniqueNumbers); 
// // Output: [1, 2, 3, 4, 5, 6, 7]


function removeDuplicates(arr) {
    let uniq = new Set(arr);
    return [...uniq];
}

const numbers = [1, 2, 3, 2, 4, 5, 4, 6, 7, 5];
const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers); 
// Output: [1, 2, 3, 4, 5, 6, 7]
