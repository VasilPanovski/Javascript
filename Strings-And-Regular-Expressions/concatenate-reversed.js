function concatenateReversed(array) {
    let result = Array.from(array.join('')).reverse();
    console.log(result.join(''));
}

concatenateReversed(['I', 'am', 'student']);