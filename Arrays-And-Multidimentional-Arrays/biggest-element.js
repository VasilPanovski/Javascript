function getBiggestElement(matrix) {
    let maxElement = Number.NEGATIVE_INFINITY;
    let currentElement;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            currentElement = matrix[row][col];
            if (currentElement > maxElement) {
                maxElement = currentElement;
            }
        }
    }

    console.log(maxElement);
}

getBiggestElement([[20, 50, 10], [8, 33, 145]]);
getBiggestElement([[3, 5, 7, 12],
                    [-1, 4, 33, 2],
                    [8, 3, 0, 4]]);
