function addItemStart(){
    let arr = [1, 2, 3, 4]
    for(let i = arr.length; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = 5
    return arr

}

console.log(
    addItemStart()
)