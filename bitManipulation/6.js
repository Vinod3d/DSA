function updateIthBit(n, i, value) {
    value = value ? 1 : 0;
    return (n & ~(1 << i)) | (value << i);
}

let number = 5;
console.log(updateIthBit(number, 1, 1)); // Output: 7 (Binary: 111)
console.log(updateIthBit(number, 2, 0)); // Output: 1 (Binary: 001)
