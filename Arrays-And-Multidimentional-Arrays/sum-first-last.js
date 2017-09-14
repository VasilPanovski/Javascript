function sumFirstAndLastElement(array) {
    array = array.map(Number);
    return array[0] + array[array.length - 1];
}

console.log(sumFirstAndLastElement(['20', '30', '40']));