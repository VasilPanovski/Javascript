function printArray(array) {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}


printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']);
