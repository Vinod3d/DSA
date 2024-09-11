 const hasTagGenerator = (str)=>{
    const string = str.trim()
    if(string.length === 0){
        return false
    }

    const strArr = string.split(" ");
    const hasStr = strArr.reduce((acc, curr) => {
       const capitalizer = curr.at(0).toUpperCase() + curr.slice(1)
       return acc + capitalizer
    }, "#")
    return hasStr
 }

 console.log(
    hasTagGenerator('my heart is pure')
 )