function searchElement(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return { row: i, col: j };
        }
      }
    }
    return null; // Element not found
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const target = 5;
const position = searchElement(matrix, target);

if (position) {
  console.log(`Element ${target} found at row ${position.row}, column ${position.col}`);
} else {
  console.log(`Element ${target} not found in the matrix.`);
}
