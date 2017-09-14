function sumNumbersWithVAT(numbers) {
    let sum = 0.0;
    for (let number of numbers) {
        sum += number;
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum / 5}`);
    console.log(`total = ${sum * 1.2}`);
}

console.log(sumNumbersWithVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]));