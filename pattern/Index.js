function numberDiamond(n){
    let count = 1;
    for(let i = 1; i<=n; i++){
        let row = '';
        for(let j= 1; j<=n-i; j++){
            row += '  ';
        }
        for(let j =1; j<=2*i-1; j++){
            row += count + ' '

        }
        count++;
        console.log(row)
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = '';
    
        // Print leading spaces
        for (let j = 1; j <= n - i; j++) {
          row += '  ';
        }
    
        // Print numbers
        for (let j = 1; j <= 2 * i - 1; j++) {
          row += count + ' ';
        }
    
        count++;
        console.log(row);
      }

}

numberDiamond(5)