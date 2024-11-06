function getSubString(str, s, e){
    let subStr = "";
    for(let i =s; i<e; i++ ){
        subStr += str.charAt(i);
    }
    return subStr;
}

console.log(getSubString('HelloWorld', 2, 6));