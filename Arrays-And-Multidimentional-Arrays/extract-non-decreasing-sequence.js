function extractNonDecreasingSequence(numbers) {
    let biggerNumber = Number.NEGATIVE_INFINITY;
    for (let number of numbers) {
        if (number >= biggerNumber) {
            biggerNumber = number;
            console.log(number);
        }
    }
}

extractNonDecreasingSequence([20,
        3,
        2,
        15,
        6,
        1]
);
