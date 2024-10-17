function rotateMatrix(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateMatrix(matrix);
console.log("Matrix rotated 90 degrees clockwise:");
matrix.forEach(row => console.log(row));
