function checkNumber(n) {
    if (n % 1 != 0) {
        return 'invalid';
    } else if (n % 2 == 0) {
        return 'even';
    } else if (n % 2 != 0) {
        return 'odd';
    }
}

console.log(checkNumber(5));
console.log(checkNumber(4));
console.log(checkNumber(1.5));