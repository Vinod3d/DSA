const arr = [1, 2, 3, 4, 5];

function shuffle(data){
    return data.map(function(a){
        return {
            value:a, 
            random:Math.random()
        }
    }).sort(function(a, b){
        return a.random - b.random;
    }).map(function(d){
        return d.value
    })
}

console.log(shuffle(arr))