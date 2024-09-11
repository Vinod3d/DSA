function isUpperCase(chr){
    let upper = ''
    if(chr.charCodeAt(0) >=65 && chr.charCodeAt(0) <= 90){
        return upper = 'uppercase'
    }else if (chr.charCodeAt(0) >=97 && chr.charCodeAt(0) <= 122){
        return upper = 'lowercase'
    } 
}

console.log(
    isUpperCase('C')
)