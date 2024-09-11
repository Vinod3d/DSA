const isPowerOfTwo = (num) =>{
    if(num <= 0){
        return false;
    }
    while(num % 2 === 0){
        num = num / 2;
    }
    return num === 1;

}

console.log(
    isPowerOfTwo(8)
)