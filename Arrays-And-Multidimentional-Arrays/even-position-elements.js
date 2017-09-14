function findEvenElement(array) {
    let result = array.filter((e, i) => i % 2 === 0).join(' ');
    console.log(result)
}

findEvenElement(['5', '10']);