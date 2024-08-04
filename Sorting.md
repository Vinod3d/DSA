## Sorting DSA Question

### 1. Bubble Sort

Bubble sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

```js
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
```

### 2. Selection Sort.

Selection sort is a simple and intuitive comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the sorting order) element from the unsorted portion of the list and moving it to the beginning (or end) of the sorted portion.

```js
    function SelectionSort(){
        let arr = [64, 34, 25, 12, 22, 18, 9]
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            let min_idx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[min_idx] > arr[j]) {
                    min_idx = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
        console.log(arr)
    }

    SelectionSort();
```

### 3. Insertion Sort.

Insertion Sort is a simple and intuitive comparison-based sorting algorithm that builds the final sorted array (or list) one item at a time. It is much like the way you might sort playing cards in your hands.

```js
    function InsertionSort(){
        let arr = [4, 6, 1, 9, 2];
        let n = arr.length;
        for(let i = 1; i<n; i++){
            let curr = arr[i]
            let prev = i -1;
            while(prev >= 0 && arr[prev] > curr){
                arr[prev + 1] = arr[prev];
                prev--
            }
            arr[prev + 1] = curr;
        }
        console.log(arr)
    }
    InsertionSort();
```

### 4. Counting Sort.

```js
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
```