function BubbleSort(){
    let arr = [64, 34, 25, 12, 22, 77]
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      console.log(arr);
}

BubbleSort();