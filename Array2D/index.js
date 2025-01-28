function transpose(matrix) {
    const n = matrix.length;

    // Transpose the matrix in place by swapping elements
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

// Example matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transpose(matrix);
console.log("Transposed Matrix:");
matrix.forEach(row => console.log(row));
