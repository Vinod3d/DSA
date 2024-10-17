# 2D Array

A 2D array, also known as a matrix or a two-dimensional array, is an array of arrays. In JavaScript, arrays are dynamic and can hold elements of different types, but when working with 2D arrays in the context of Data Structures and Algorithms (DSA), we usually deal with arrays of arrays containing elements of the same type.

## 1. Creating a 2D Array

**Literal Declaration**

You can create a 2D array using array literals:

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

**Dynamic Declaration**

Creating a dynamic 2D array (e.g., 3x3 matrix):

```js
const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = [i, j];
  }
}

console.log(matrix);
```

## 2. Accessing Elements

Access elements using two indices:

```js
const value = matrix[rowIndex][colIndex];
```

Example:

```js
const element = matrix[1][2];
```

## 3. Iterating Over a 2D Array

**Using Nested Loops**

```js
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

**Using for...of Loop**

```js
for (const row of matrix) {
  for (const element of row) {
    console.log(element);
  }
}
```

## 4. Common Operations

### 4.1. Transposing a Matrix

Swapping rows with columns.

```js
function transpose(matrix) {
  let transposed = [];

  for (let i = 0; i < matrix.length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      (transposed[i][j] = matrix[j][i]), "\n";
    }
  }

  return transposed;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposedMatrix = transpose(matrix);

transposedMatrix.forEach((row) => console.log(row));

// [ 1, 4, 7 ]
// [ 2, 5, 8 ]
// [ 3, 6, 9 ]
```

### 4.2. Creating Dynamic 2d Array.

```js
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

matrix.forEach((row) => console.log(row));

// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
```

### 4.3. Matrix Addition Code.

```js
function addMatrices(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
}

const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrixB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const sumMatrix = addMatrices(matrixA, matrixB);

console.log("\nSum of Matrices:");
sumMatrix.forEach((row) => console.log(row));
```

### 4.4. Matrix Multiplication Code.

```js
function multiplyMatrices(a, b) {
  const result = [];
  for (let i = 0; i < a.lenght; i++) {
    result[i] = [];
    for (let j = 0; j < a[i].lenght; i++) {
      let sum = 0;
      for (let k = 0; k < b[i].lenght; i++) {}
    }
  }
}

const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
];

const matrixB = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const productMatrix = multiplyMatrices(matrixA, matrixB);
console.log("\nProduct of Matrices:");
productMatrix.forEach((row) => console.log(row));
```

### 4.5. Searching in Matrix.

```js
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
  [7, 8, 9],
];

const target = 5;
const position = searchElement(matrix, target);

if (position) {
  console.log(
    `Element ${target} found at row ${position.row}, column ${position.col}`
  );
} else {
  console.log(`Element ${target} not found in the matrix.`);
}
```

### 4.6. Sum Of Diagonal of Matrix.

Given a square matrix, calculate the sum of its primary and secondary diagonals.

```js
function sumOfDiagonals(matrix) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][matrix.length - i - 1];
    total = primaryDiagonal + secondaryDiagonal;
  }
  return total;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const totalSum = sumOfDiagonals(matrix);
console.log("Sum of primary and secondary diagonals:", totalSum);
```

### 4.7. Rotate Matrix 90 Degree.

```js
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
  [7, 8, 9],
];

rotateMatrix(matrix);
console.log("Matrix rotated 90 degrees clockwise:");
matrix.forEach((row) => console.log(row));
```
