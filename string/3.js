const countCharecter = (str, char)=>{
    let count = 0;
    const strArr = str.split("");
    // strArr.map((item, i)=>{
    //     if(item === char){
    //         count ++
    //     }
    // })

    const countChar = strArr.reduce((accu, curr)=>{
        if(curr === char){
            accu++
        }
        return accu
    }, 0)
    
    return countChar
    // return `${char}` + " is " +  count + " times";
}


console.log(
    countCharecter("Missisippi", 'i')
)