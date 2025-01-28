function powerN(x, n){
    if(n == 0){
        return 1;
    }

    return x * powerN(x, n-1);
}

console.log(powerN(2, 10))