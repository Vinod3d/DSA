function clearLastIBits(n, i) {
    return n & ~((1 << i) - 1);
}

console.log(clearLastIBits(3, 1)); // Output: 2 (Binary: 10)
console.log(clearLastIBits(29, 3)); // Output: 24 (Binary: 11000)
