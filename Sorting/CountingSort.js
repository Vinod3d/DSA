function CountingSort(){
    let arr = [4, 2, 2, 8, 3, 3, 1];
    let max = Math.max(...arr);

    let count = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    let j = 0 ;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }

    console.log(arr)
}

CountingSort();