const startsWith = (str, substr) =>{
    return str.slice(0, substr.length) === substr;
}

console.log(
    startsWith('Hello world', 'Hello')
)