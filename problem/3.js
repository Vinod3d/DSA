const extractNumber = (str)=>{
    let regex = /\d+/g;
    return str.match(regex)
}

console.log(
    extractNumber("abc123def456")
)