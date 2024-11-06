function findDiagonalOrder(matrix){
    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];
    let directionUp = true;
    let row = 0, col = 0;

    while(result.length < m*n){
        result.push(matrix[row][col]);

        if(directionUp){

            if(col === n - 1){
                row++;
                directionUp = false;
            }
            else if(row === 0){
                col++;
                directionUp = false;
            } 

            else{
                row--;
                col++;
            }
        } 
        else{
            if(row === m - 1){
                col++;
                directionUp = true;
            }
            else if(col === 0){
                row++;
                directionUp = true;
            }

            else{

                row++;
                col--;
            }
        }
    }

    return result;
}

const mat = [ 
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(findDiagonalOrder(mat));