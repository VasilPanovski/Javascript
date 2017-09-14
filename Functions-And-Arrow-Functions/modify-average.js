function modifyAverage(input) {
    input = input.toString();
    let sum = 0;
    let length = input.length;
    for (let i = 0; i < length; i++) {
        sum += Number(input[i]);

    }

    let currentAvrg = sum / length;
    while (currentAvrg <= 5) {
        sum += 9;
        length++;
        currentAvrg = sum / length;
        input += '9';
    }

    console.log(input);
}

modifyAverage(5835);