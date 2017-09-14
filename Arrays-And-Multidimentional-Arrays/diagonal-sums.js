function getDiagonalSums(matrix) {
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftToRightDiagonal += matrix[i][i];
        rightToLeftDiagonal += matrix[i][matrix.length - 1 - i];
    }

    console.log(leftToRightDiagonal + ' ' + rightToLeftDiagonal);
}

getDiagonalSums([[20, 40],[10, 60]]);
getDiagonalSums([[3, 5, 17],
                 [-1, 7, 14],
                 [1, -8, 89]]);