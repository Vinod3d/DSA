function powerN(x, n) {
    if (n === 0) {
        return 1;
    }

    let halfPower = powerN(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return halfPower * halfPower;
    } else {
        return x * halfPower * halfPower;
    }
}