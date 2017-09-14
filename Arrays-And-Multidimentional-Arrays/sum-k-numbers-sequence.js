function printTribonacci(n, k) {
    let result = [1];
    let startIndex, endIndex, sum = 0;
    for (let i = 1; i < n; i++) {
        startIndex = Math.max(0, i - k);
        endIndex = i - 1;
        sum = getSum(startIndex, endIndex);
        result[i] = sum;
    }

    function getSum(startIndex, endIndex) {
        let sum = 0;
        for (let i = startIndex; i <= endIndex; i++) {
            sum += result[i];
        }

        return sum;
    }

    console.log(result.join(' '));
}

printTribonacci(8, 2);
