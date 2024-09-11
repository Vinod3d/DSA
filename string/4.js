// function countVovel(){
//     let str = "Hello, World!";
//     str.toLowerCase;
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count++;
//         }
//     }
//     return count
// }

// console.log(
//     countVovel()
// )


// function returnVovel(){
//     let str = "Hello, World!";
//     let varr = ['a', 'e', 'i', 'o', 'u']
//     str.toLowerCase;
//    let vovel = str.split("").filter((value)=> varr.includes(value))
//     return vovel
// }

// console.log(
//     returnVovel()
// )

// // [ 'e', 'o', 'o' ]


function returnVovel(){
    let str = "Hello, World!";
    let varr = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    str.toLowerCase;
   let vovel = str.split("").filter((value)=> varr.includes(value))
    
   for (v of vovel){
    vowelCount[v] += 1
   }

   return vowelCount;
}

console.log(
    returnVovel()
)