function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    let prime = true;
    let maxDivider = Math.sqrt(num);
    for (let div = 2; div <= maxDivider; div++) {
        if (num % div == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(81));
console.log(isPrime(0));