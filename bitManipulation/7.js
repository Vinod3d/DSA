function clearLastIBits(n, i) {
    return n & ~((1 << i) - 1);
}

let number = 29; // Binary: 11101
console.log(clearLastIBits(number, 2)); // Output: 28 (Binary: 11100)
console.log(clearLastIBits(number, 3)); // Output: 24 (Binary: 11000)
