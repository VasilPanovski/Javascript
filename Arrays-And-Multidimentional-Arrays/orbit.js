function orbit(array) {
    let [rows, cols, x, y] = array.map(Number);

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let num = 1;
    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while (true) {
        let isField = false;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1, currentCol + counter);
        num++;
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num;
                    isField = true;
                }

            }
        }

        if (!isField) {
            break;
        }

        counter++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

orbit([5, 5, 2, 2]);
