const nArr = [
    [1, 2, 3],
    [
      [4, 5, 6],
      [7, 8, 9],
      [
        [10, 11],
        [12, 13, 14],
      ]
    ],
    [15, 16, 17, 18]
];

function flattenArray(arr){
    let result = [];
    arr.forEach((val)=>{
        if(Array.isArray(val)){
            result = result.concat(flattenArray(val));
        } else {
            result.push(val);
        }
    })
    return result
}

let flatArray =  flattenArray(nArr);


console.log(flatArray)