// Method 1

// function countAccurence(){
//     let arr = [1, 2, 2, 3, 1, 4, 2];
//     let objKey = [...new Set(arr)];
    
//     let countObj = objKey.reduce((acc, curr) => {
//         acc[curr] = 0
//         return acc;
//     }, {})
    
//     for(let i = 0; i< arr.length; i++){
//         countObj[arr[i]] += 1;
//     }
//     return countObj
// }


// console.log(
//     countAccurence()
// )

// Method 2

function countAccurence(){
    let arr = [1, 2, 2, 3, 1, 4, 2];
    let counts = {};

    for(let elements of arr){
        counts[elements] = (counts[elements] || 0) + 1;
    }

    return counts;
}

console.log(
    countAccurence()
)
