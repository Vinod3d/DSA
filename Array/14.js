function calculatAverage(){
    const arr = [5, 8, 22, 12, 18];
    let total;
    const average = arr.reduce((acc, cur)=>{
       return total  = acc + cur;
    },0)

    return total/arr.length
};

console.log(
    calculatAverage()
)