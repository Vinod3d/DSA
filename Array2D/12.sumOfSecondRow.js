
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let secondRow = matrix[1];

let sum = secondRow.reduce((acc, num) => acc + num, 0);

console.log("The sum of the second row is:", sum);
