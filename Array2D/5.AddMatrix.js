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
    [7, 8, 9]
  ];
  
  const matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
  ];
  
  const sumMatrix = addMatrices(matrixA, matrixB);
  
  console.log('\nSum of Matrices:');
  sumMatrix.forEach(row => console.log(row));
  