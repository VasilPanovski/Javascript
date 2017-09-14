function getNumbersAsString(number) {
    let result = '';
    let maxNumber = Number(number);
    for (let num = 1; num <= maxNumber; num++) {
        result += num;
    }

    console.log(result);
}

getNumbersAsString('101');
