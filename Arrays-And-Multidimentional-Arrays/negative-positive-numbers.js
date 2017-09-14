function sortNumberNegativeFirst(array) {
    let result = [];
    let current = 0;
    for (let i = 0; i < array.length; i++) {
        current = array[i];
       if (current < 0) {
           result.unshift(current)
       } else {
           result.push(current);
       }
    }
    result.forEach(e => console.log(e));
}

sortNumberNegativeFirst([3, -2, 0, -1, 10]);
