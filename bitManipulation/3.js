function getIthBit(n, i) {
    return (n & (1 << i)) == 0 ? 0 : 1;
}

let number = 5; // Binary: 101
console.log(getIthBit(number, 0)); // Output: 1 (rightmost bit)
console.log(getIthBit(number, 1)); // Output: 0
console.log(getIthBit(number, 2)); // Output: 1
