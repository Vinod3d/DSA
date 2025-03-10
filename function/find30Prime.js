function isPrime(n){
    if(n <=1){
        return false;
    }
for(let i = 2; i<= Math.sqrt(n); i++){
    if(n%i == 0){
        return false;
    }
}

return true;
}

function firstNPrimesRange(n, range){
const primes = [];
for(let i = 2; i<=range; i++){
    if(isPrime(i)){
        primes.push(i);
        if(primes.length === n) break;
    }
}

return primes;
}

console.log(firstNPrimesRange(30, 1000))

























