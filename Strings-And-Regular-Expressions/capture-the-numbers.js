function getNumbersFromText(input) {
    let numbers = [];
    let regex = /\d+/g;
    let text = '';
    for (let i = 0; i < input.length; i++) {
        text += input[i];
    }

    let match = regex.exec(text);
    while (match) {
        numbers.push(match[0]);
        match = regex.exec(text);
    }

    console.log(numbers.join(' '))
}

getNumbersFromText('123a456789b987654c3210');