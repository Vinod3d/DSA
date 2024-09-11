function fibonacciSequence(num) {
    let sequence = [0, 1];

    for (let i = 2; i <= num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, num);
}

console.log(fibonacciSequence(5));
