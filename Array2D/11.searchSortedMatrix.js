function searchSortedMatrix(matrix, target ){
    let rows = matrix.length;
    let cols = matrix[0].length;

    // start from top right corner


    let row = 0;
    let col = cols - 1;

    while(row < rows && col >= 0){
        if(matrix[row][col] === target) {
            return [row, col];
        }

        else if(target < matrix[row][col]){
            col--;
        }
        else{
            row++
        }
    }

}

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
  
  let target = 14;
  console.log(searchSortedMatrix(matrix, target));