function traverseMatrix(n, m) {
    let total = n * m;
    var matrix= [];

    for(let row = 0; row < n; row++) {
        let currentRow = [];
        for(let col = 0; col < n; col++) {
            currentRow.push(0);
        }
        matrix.push(currentRow);
    }

    let currentRow = 0;
    let currentCol = 0;
    let step = 0;
    for(let i = 0; i < total;){
        while(currentCol + step < n){
            i++;
            matrix[currentRow][currentCol] = i;
            currentCol++;

        }
        currentCol--;
        currentRow++;

        while(currentRow + step < n){
            i++;
            matrix[currentRow][currentCol] = i;
            currentRow++;
        }
        currentRow--;
        currentCol--;

        while(currentCol >= step){
            i++;
            matrix[currentRow][currentCol] = i;
            currentCol--;
        }
        currentCol++;
        currentRow--;
        step++;

        while(currentRow >= step){
            i++;
            matrix[currentRow][currentCol] = i;
            currentRow--;
        }
        currentRow++;
        currentCol++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

traverseMatrix(5, 5);