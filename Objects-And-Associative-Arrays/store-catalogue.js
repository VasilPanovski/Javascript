function solve(array) {
    let initialsByName = new Map();
    let sortedArr = array.sort();
    let initial = '';
    for (let element of sortedArr) {
        let [productName, productPrice] = element.split(' : ');
        initial = productName[0];
        if (!initialsByName.has(initial)) {
            initialsByName.set(initial, new Map())
        }

        initialsByName.get(initial).set(productName, productPrice);
    }

    for (let [initial, productsByName] of [...initialsByName]) {
        console.log(initial);
        for (let [product, price] of [...productsByName]) {
            console.log('  ' + product + ': ' + price);
        }
    }
}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])