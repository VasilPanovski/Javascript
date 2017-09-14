function getTwoSmallestNum(array) {
    array.sort((a, b) => a-b);
    let result = array.slice(0, 2);
    return result.join(' ');

}

console.log(getTwoSmallestNum([3, 0, 10, 4, 7, 3]));
console.log(getTwoSmallestNum([30, 15, 50, 5]));