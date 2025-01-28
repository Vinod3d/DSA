function tilingProblem(n){
    if(n === 0) return 1;
    if(n === 1) return 1;

    return tilingProblem(n - 1) + tilingProblem(n - 2);
}

console.log(tilingProblem(4));