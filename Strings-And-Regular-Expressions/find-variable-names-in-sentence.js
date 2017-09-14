function findVariables(sentence) {
    let pattern = /\b_[a-zA-Z0-9]+\b/g;
    let match = pattern.exec(sentence);
    let result = [];
    while (match) {
        result.push(match[0].substring(1));
        match = pattern.exec(sentence);
    }
    console.log(result.join(','))
}

findVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable')