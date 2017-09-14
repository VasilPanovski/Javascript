function isValidDistance(input) {
    let x1 = input[0], x2 = input[2];
    let y1 = input[1], y2 = input[3];
    let p1ToCoordinateSystem = Number.isInteger(Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2))) ? 'is valid' : 'is invalid';
    let p2ToCoordinateSystem = Number.isInteger(Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2))) ? 'is valid' : 'is invalid';
    let p1ToP2 = Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))) ? 'is valid' : 'is invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} ${p1ToCoordinateSystem}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${p2ToCoordinateSystem}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${p1ToP2}`);
}

isValidDistance([3, 0, 0, 4]);
isValidDistance([2, 1, 1, 1]);