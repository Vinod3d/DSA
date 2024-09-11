function findMode(){
    let arr = [1, 2, 2, 3, 1, 4, 2, 1, 1, 1, 4,4,4,4,4,  ]
    let counts = {};
    let maxCount = 0;
    let mode;

    for(let element of arr){
        counts[element] = (counts[element] || 0) + 1;
        if(counts[element] > maxCount){
             maxCount = counts[element]
             mode = element
        }
    }
    return mode
}


console.log(
    findMode()
)