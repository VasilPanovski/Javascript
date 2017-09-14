function createObject(tokens) {
    let object = {property, value};
    for (let i = 0; i < tokens.length; i+=2) {
        object.property = tokens[i];
        object.value = tokens[i+1];
    }

    console.log(object);
}

createObject(['name', 'Pesho', 'age', '23']);
