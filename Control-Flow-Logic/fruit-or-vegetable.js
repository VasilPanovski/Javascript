function fruitOrVegetable(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];
    if (fruits.includes(input)) {
        return 'fruit';
    } else if (vegetables.includes(input)) {
        return 'vegetable';
    } else {
        return 'unknown';
    }
}

console.log(fruitOrVegetable('banana'));
console.log(fruitOrVegetable('cucumber'));
console.log(fruitOrVegetable('pizza'));