function pairsInArray(){
    let arr = [1, 2, 3, 4, 5]
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]])
        }
    }
    console.log(pairs)
}

pairsInArray();



