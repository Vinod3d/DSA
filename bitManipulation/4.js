function setIthBit(n, i) {
    return n | (1 << i);
}

let number = 5; // Binary: 101
console.log(setIthBit(number, 1)); // Output: 7 (Binary: 111)
