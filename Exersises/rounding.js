function roundNumberByGivenPrecision(input) {
    let tokens = input.map(Number);
    let number = tokens[0];
    let precision = tokens[1] > 15 ? 15 : tokens[1];
    let result = number.toFixed(precision);
    console.log(parseFloat(result));
}

roundNumberByGivenPrecision([3.1415926535897932384626433832795, 2]);
