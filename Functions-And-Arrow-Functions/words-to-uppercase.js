function makeWordsToUppercase(sentanse) {
    return sentanse.split(/\W+/).filter(w => w != ' ' && w != '').map(w => w.toUpperCase()).join(', ');
}

console.log(makeWordsToUppercase('Hi, how are you?'));