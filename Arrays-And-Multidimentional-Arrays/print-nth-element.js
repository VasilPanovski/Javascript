function printElementAtGivenStep(array) {
    let step = Number(array.pop());
    for (let index = 0; index < array.length; index+=step) {
        console.log(array[index]);

    }
}


printElementAtGivenStep([5,
    20,
    31,
    4,
    20,
    2
]);