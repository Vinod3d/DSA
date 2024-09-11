function binaryToDecimal(n) {
    let ans = 0;
    let i = 0;
    
    while (n > 0) {
        let bit = n % 10;
        ans += bit * Math.pow(2, i);
        n = Math.floor(n / 10);
        i++;
    }
    
    return ans;
}

let binaryNumber = 111;
let decimalNumber = binaryToDecimal(binaryNumber);
console.log(decimalNumber);
