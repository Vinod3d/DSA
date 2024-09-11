function toCamelCase(){
    let str = 'hello my friend';
    let arr = str.split(' ');
    let result = arr[0];
    for(let i = 1; i<arr.length; i++){
       result += arr[i].charAt(0).toUpperCase().padStart(2, "_") + arr[i].slice(1);
    }
    return result
}


console.log(
    toCamelCase()
)
// hello_My_Friend