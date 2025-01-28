function clearIthBit(n, i) {
    return n & ~(1 << i);
}

let number = 5; // Binary: 101
console.log(clearIthBit(number, 0)); // Output: 4 (Binary: 100)
