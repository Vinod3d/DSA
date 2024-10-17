function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index `mid`
        }
        else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        }
        else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const result = binarySearch(arr, target);
console.log(result >= 0 ? `Target found at index ${result}` : "Target not found");
