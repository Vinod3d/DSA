function QuickSort() {
    let arr = [10, 7, 8, 9, 1, 5];
    let low = 0;
    let high = arr.length - 1;

    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  // Swap pivot to the correct position
        return i + 1;
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);  // Sort the left subarray
            quickSort(arr, pi + 1, high);  // Sort the right subarray
        }
    }

    quickSort(arr, low, high);
    console.log(arr);  // Print the sorted array
}

QuickSort();
