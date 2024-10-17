function spiralOrder(matrix) {
    const result = [];
    if (matrix.length === 0) return result;
  
    let startRow = 0;
    let startColumn = 0;
    let endRow = matrix.length - 1;
    let endColumn = matrix[0].length - 1;
  
    while (startRow <= endRow && startColumn <= endColumn) {
      for (let i = startColumn; i <= endColumn; i++) {
        result.push(matrix[startRow][i]);
      }
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        result.push(matrix[i][endColumn]);
      }
      endColumn--;
  
      for (let i = endColumn; i >= startColumn; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
  
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startColumn]);
      }
      startColumn++;
    }
    return result;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log("Spiral Order Traversal:");
  console.log(spiralOrder(matrix));
  