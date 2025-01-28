function removeDuplicate(str, index = 0, result = ''){
    if(index === str.length){
        return result;
    }

    const currentChar = str[index];

    if(!result.includes(currentChar)){
        result += currentChar;
    }

    return removeDuplicate(str, index + 1, result)
}

const str = "aabbccdde";
console.log(removeDuplicate(str));