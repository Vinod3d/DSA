## Bit Manipulation

Bit manipulation refers to the act of using bitwise operators to manipulate individual bits of numbers. It's a powerful technique that can help optimize algorithms and solve problems efficiently by working at the binary level.

## Bitwise Operators

**Bitwise AND (&)**

- a & b returns a number where each bit is 1 if the corresponding bits of a and b are 1. Otherwise, it's 0.

- Example: `5 & 3` → 0101 & 0011 → 0001 (i.e., 1)

**Bitwise OR (|)**

- a | b returns a number where each bit is 1 if either of the corresponding bits of a or b is 1. Otherwise, it's 0.

- Example: 5 | 3 → 0101 | 0011 → 0111 (i.e., 7)

**Bitwise XOR (^)**

- a ^ b returns a number where each bit is 1 if the corresponding bits of a and b are different. Otherwise, it’s 0.

- Example: 5 ^ 3 → 0101 ^ 0011 → 0110 (i.e., 6)

**Bitwise NOT (~)**

- ~a inverts all the bits of a, changing 1s to 0s and 0s to 1s.

- Example: ~5 → ~0101 → 1010 (which is -6 in two's complement representation for 4-bit numbers)

**Left Shift (<<)**
- a << b shifts the bits of a to the left by b positions, effectively multiplying a by 2^b.

- Example: 5 << 1 → 0101 << 1 → 1010 (i.e., 10)

**Right Shift (>>)**

- a >> b shifts the bits of a to the right by b positions, effectively dividing a by 2^b.

-  Example: 5 >> 1 → 0101 >> 1 → 0010 (i.e., 2)

## Practice Problem

### 1. Binary to Decimal.

```js
    function binaryToDecimal(n) {
        let ans = 0;
        let i = 0;
        
        while (n > 0) {
            let bit = n % 10;
            ans += bit * Math.pow(2, i);
            n = Math.floor(n / 10);
            i++;
        }
        
        return ans;
    }

    let binaryNumber = 111;
    let decimalNumber = binaryToDecimal(binaryNumber);
    console.log(decimalNumber);

```

### 2. Check Odd Even.

```js
    function checkOddEven(n) {
        return (n & 1) === 1 ? 'Odd' : 'Even';
    }

    console.log(checkOddEven(2));
```

### 3. Get ith bit.

```js
    function getIthBit(n, i) {
        return (n & (1 << i)) == 0 ? 0 : 1;
    }

    let number = 5; // Binary: 101
    console.log(getIthBit(number, 0)); // Output: 1 (rightmost bit)
    console.log(getIthBit(number, 1)); // Output: 0
    console.log(getIthBit(number, 2)); // Output: 1
```

### 4. Set ith bit.

```js
    function setIthBit(n, i) {
        return n | (1 << i);
    }

    let number = 5; // Binary: 101
    console.log(setIthBit(number, 1)); // Output: 7 (Binary: 111)

```

### 5. Clear ith bit.

```js
    function clearIthBit(n, i) {
        return n & ~(1 << i);
    }

    let number = 5; // Binary: 101
    console.log(clearIthBit(number, 0)); // Output: 4 (Binary: 100)

```

### 6. Update bit.

```js
    function updateIthBit(n, i, value) {
        value = value ? 1 : 0;
        return (n & ~(1 << i)) | (value << i);
    }

    let number = 5; // Binary: 101
    console.log(updateIthBit(number, 1, 1)); // Output: 7 (Binary: 111)
    console.log(updateIthBit(number, 2, 0)); // Output: 1 (Binary: 001)
```

### 7. Clear Last bits.

```js
    function clearLastIBits(n, i) {
        return n & ~((1 << i) - 1);
    }

    console.log(clearLastIBits(3, 1)); // Output: 2 (Binary: 10)
    console.log(clearLastIBits(29, 3)); // Output: 24 (Binary: 11000)
```