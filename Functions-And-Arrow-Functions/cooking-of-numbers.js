function cookNumber(input) {
 let sequence = input.shift();

    for (let operation of input) {
        sequence = performOperation(operation, sequence);
        console.log(sequence);
    }

    function performOperation(operation, sequence) {
        switch (operation) {
            case 'chop': return sequence / 2;
            case 'dice': return Math.sqrt(sequence);
            case 'spice': return sequence + 1;
            case 'bake': return sequence * 3;
            case 'fillet': return sequence * 0.8;
        }
    }
}

// cookNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);