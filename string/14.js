// const generateBarChart = (arr) =>{
//     let bar = ''
//     const newArr = arr.map((currElem, index)=>{
//         console.log(`${index + 1}:  ${bar.padEnd(currElem, '*')}`)
//     })
// }

// console.log(
//     generateBarChart([5, 3, 9, 2])
// )


const generateBarChart = (arr) =>{
    const newArr = arr.map((curEle, index)=>{
        let star = "";
        let number = 0;
        while(number< curEle){
             star = star + "*";
             number++
        }
        return `${index + 1}: ${star}`;
    })

    return newArr.join("\n")
}

console.log(
    generateBarChart([5, 3, 9, 2])
)