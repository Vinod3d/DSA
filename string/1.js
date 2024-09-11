const findLongestword = (str)=>{
    if(str.trim().length === 0){
        return false;
    }

    let strArr = str.split(" ");

    // FIRST

    // strArr = strArr.sort((a, b)=> a.length - b.length);
    // return strArr.at(-1);

    // SECOND
    return strArr.reduce((accum, current) => ( current.length > accum.length ? current : accum))
}

console.log(
    findLongestword("watch Video Hoolywood series on YouTube")
)