
    function printDiamondPattern(n) {
        // UP Side
    for(let i = 1; i<=n; i++){
        let row = '';

        // Print Leading space
        for(let j = 1; j<=n-i; j++){
            row+= '  ';
        }

        for(let j=1; j<=2*i-1; j++){
            row += ' *';
        }
        console.log(row);
    }

    // DOWN Side
    for(let i = n-1; i>=1; i--){
        let row = '';
        // Print Leading space
        for(let j = 1; j<=n-i; j++){
            row += '  ';
        }

        for(let j = 1; j<=2*i - 1; j++){
            row += ' *'
        }
        console.log(row)
    }
  
  }
  

  printDiamondPattern(5);