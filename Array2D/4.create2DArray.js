const rows = 3;
const cols = 3;
const matrix = [];

let count = 1;

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = count++;
  }
}

matrix.forEach(row => console.log(row))