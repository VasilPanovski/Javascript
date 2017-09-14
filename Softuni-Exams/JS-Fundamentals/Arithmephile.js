function solve(array) {
    array = array.map(Number);
    let currentMultiplication = 1;
    let maxMultiplication = Number.MIN_SAFE_INTEGER;
    let s = 0;
    for (let i = 0; i < array.length - 1; i++) {
        s = array[i];
        if (s < 10 && s >= 0) {
            currentMultiplication = calcMultiplication(i+1, array[i]);
            if (currentMultiplication > maxMultiplication) {
                maxMultiplication = currentMultiplication;
                currentMultiplication = 1;
            }
        }
    }

    console.log(maxMultiplication);

    function calcMultiplication(startIndex, s) {
        let currentIndex = startIndex;
        let loops = Math.min(s, array.length);
        for (let i = 0; i < loops; i++) {
            currentMultiplication *= array[currentIndex];
            currentIndex++;
        }

        return currentMultiplication;
    }
}

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);
