function printAscending(n ){
    if(n == 1){
        console.log(1);
        return
    }
    printAscending(n-1);
    console.log(n);
}

printAscending(10);