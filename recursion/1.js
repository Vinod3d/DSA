function printDecending(n){
    if(n<=0){
        return;
    }
console.log(n)
printDecending(n-1);
}

printDecending(10)