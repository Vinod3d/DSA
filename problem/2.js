const fizzbuzz = (sNum, eNum)=>{
    let arr = [];
    for(let i = sNum; i<=eNum; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz");
        } else if(i%3 === 0){
            arr.push("Fizz");
        } else if(i % 5 === 0){
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }

    return arr     
}

console.log(
    fizzbuzz(1, 15)
)