function multiplyMatrices(a, b){
    const result = []
    for(let i = 0; i<a.lenght; i++){
        result[i] = []
        for(let j = 0; j<a[i].lenght; i++){
            let sum = 0;
            for(let k = 0; k<b[i].lenght; i++){
                
            }
        }
        
    }
}

const matrixA = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  
  const productMatrix = multiplyMatrices(matrixA, matrixB);
  console.log('\nProduct of Matrices:');
  productMatrix.forEach(row => console.log(row));