
function transpose(matrix){
    let transposed = [];

    for (let i = 0; i< matrix.length; i ++){
        transposed[i] = [];
        for(let j = 0; j< matrix[i].length; j++){
            transposed[i][j] = matrix[j][i] , '\n';
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

transposedMatrix.forEach(row => console.log(row));
