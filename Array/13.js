function findSecondLargest(arr) {
    if(arr.length < 2){
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return null;
    }

    return secondLargest;
}

const numbers = [10, 5, 8, 20, 15];
const result = findSecondLargest(numbers);
console.log(`The second largest number is ${result}`);
