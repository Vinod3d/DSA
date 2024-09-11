function sumOfSquares(){
    const arr = [5, 4, 2, 1];
    const sum = arr.reduce((accu, curr)=>accu+= (curr*curr),0)
    return sum;
}


console.log(
    sumOfSquares()
)