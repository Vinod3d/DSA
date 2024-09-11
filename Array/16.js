// function sumOfDigits(){
//     let num = 49039;
//     let arr = Array.from(String(num));
//     let sum = arr.reduce((accu, cur)=> {
//         return accu += parseInt(cur);
//     },0);
//     return sum
// }

// console.log(
//     sumOfDigits()
// )

function sumOfDigits() {
    let num = 49039;
    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits());
