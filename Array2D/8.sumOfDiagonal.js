function sumOfDiagonals(matrix){
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];
        total = primaryDiagonal + secondaryDiagonal
    }
    return total;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const totalSum = sumOfDiagonals(matrix);
console.log("Sum of primary and secondary diagonals:", totalSum);