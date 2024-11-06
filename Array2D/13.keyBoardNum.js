function keyNum() {
    const row = 4; // Number of rows
    const col = 2; // Number of columns
    let result = [];
    let num = 9;   // Start with 9 to fit the desired pattern

    for (let i = 0; i < row; i++) {
        result[i] = []; // Initialize the row
        for (let k = col; k >=0; k--) {
            if(num>=0){

                result[i][k] = num;
                num--;
            } else{
                result[i][k] = '';
            }
        }
    }

    for (let i = 0; i < row; i++) {
        console.log(result[i].join(' '));
    }
}

keyNum();
