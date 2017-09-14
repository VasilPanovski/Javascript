function solve(dataRows) {
    let n = Number(dataRows.shift());
    let templateMatrix = [];
    let mainMatrix = [];
    for (let i = 0; i < n; i++) {
        templateMatrix.push(dataRows[i].split(' ').map(Number));
    }

    for (let i = n; i < dataRows.length; i++) {
        mainMatrix.push(dataRows[i].split(' ').map(Number));
    }

    let templateValue, mainValue, letterPosition = 0;
    let message = '';
    for (let row = 0; row < mainMatrix.length; row++) {
        for (let col = 0; col < mainMatrix[row].length; col++) {
            templateValue = templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
            mainValue = mainMatrix[row][col];
            letterPosition = (mainValue + templateValue) % 27;
            message += String.fromCharCode(((templateValue + mainValue) % 27) + 64);
        }

    }
    message = message.replace(/@/g, ' ');
    console.log(message)
}

solve(
    [ '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22' ]
)
