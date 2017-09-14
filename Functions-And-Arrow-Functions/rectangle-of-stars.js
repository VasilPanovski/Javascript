function printMatrixOfStars(n) {
    let currentRow = '';
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            currentRow += '* ';
        }
        console.log(currentRow);
        currentRow = '';
    }
}

printMatrixOfStars(5);