function BubbleSort() {
  let arr = [5, 7, 8, 1, 3, 2];
  let n = arr.length;
  let flag;

  for (let i = 0; i < n - 1; i++) {
      flag = 0;
      for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap elements
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              flag = 1;  // Set flag to 1 if a swap occurred
          }
      }
      // If no swaps occurred, array is sorted, break the loop
      if (flag == 0) {
          break;
      }
  }
  console.log(arr);
}

BubbleSort();
