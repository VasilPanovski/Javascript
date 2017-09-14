function printFirstAndLastKElements(array) {
    let k = Number(array.shift());
    console.log(array.slice(0, k).join(' '));

    let startIndex = array.length - k;
    console.log(array.slice(startIndex, array.length).join(' '));
}

printFirstAndLastKElements([2, 7, 8, 9]);
printFirstAndLastKElements([3, 6, 7, 8, 9]);
