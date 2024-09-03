function SelectionSort(){
    let arr = [64, 34, 25, 12, 22, 18, 9]
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        // let temp = arr[i];
        // arr[i] = arr[min_idx];
        // arr[min_idx] = temp;

        [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]]
    }
    console.log(arr)
}

SelectionSort();