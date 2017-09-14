function isMatrixMagical(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;
    let currentSum = 0;
    for (let row = 1; row < matrix.length; row++) {
        currentSum = matrix[row].reduce((a, b) => a + b);
        if (currentSum !== sum) {
            return false
        }
    }

    let colSums = matrix.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

    for (let colSum of colSums) {
        if (colSum !== sum) {
            return false
        }
    }
    return isMagic;
}


console.log(isMatrixMagical([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(isMatrixMagical([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));

console.log(isMatrixMagical([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
))