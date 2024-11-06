function stringCompression(str){
    let newStr = "";
    for(let i = 0; i<str.length; i++){
        let count = 1;
        while(i<str.length - 1 && str.charAt(i) == str.charAt(i + 1)){
            count++;
            i++
        }
        newStr += str.charAt(i);
        if(count > 1){
            newStr += count.toString();
        }

    }
    return newStr;

}

const str = "aaabbccccddd"
console.log(stringCompression(str))