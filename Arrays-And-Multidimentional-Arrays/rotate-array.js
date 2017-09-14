function rotateArray(array) {
    let rotations = array.pop() % array.length;
    let rotatedElement;
    for (let i = 0; i < rotations; i++) {
        rotatedElement = array.pop();
        array.unshift(rotatedElement);

    }

    console.log(array.join(' '));
}

rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana','Orange', 'Coconut', 'Apple', 15]);
