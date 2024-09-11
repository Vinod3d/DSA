const isPalindrome = (str)=>{
    let strChar = str.toLowerCase().replace(/\W/g, "");
    let reversed = strChar.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));