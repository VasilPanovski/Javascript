function diagonalAttack(array) {
    let matrix = [];
    for (let index = 0; index < array.length; index++) {
        matrix.push(array[index].split(' ').map(Number))
    }

    let leftToRightDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                leftToRightDiagonalSum += matrix[row][col];
            }

            if (col === matrix[row].length - 1 - row) {
                rightToLeftDiagonalSum += matrix[row][col];
            }
        }

    }

    if (rightToLeftDiagonalSum !== leftToRightDiagonalSum) {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    } else {

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === col || col === matrix[row].length - 1 - row) {
                   continue;
                }

                matrix[row][col] = rightToLeftDiagonalSum;
            }
        }

        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }

}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);
console.log();
diagonalAttack(['1 1 1',
            '1 1 1',
            '1 1 0']
);


