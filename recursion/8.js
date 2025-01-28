function tilingProblem(n){
    if(n === 0) return 1;
    if(n === 1) return 1;

    let ways = new Array(n +1).fill(0);
    ways[0] = 1;
    ways[1] = 1;

    for(let i = 2; i<=n; i++){
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n]
}

console.log(tilingProblem(4));