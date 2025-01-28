const arr = [1, 4, 5, [4, 5, [6, [3]]]];

function flat(data){
    const result = [];
    
    if(Array.isArray(data)){
        data.forEach(function(e){
            result.push(...flat(e));
        });
    } else {
        result.push(data)
    }
    
    return result
}

console.log(flat(arr));