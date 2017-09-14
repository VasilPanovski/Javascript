function lowestPriceInCities(array) {
    let townByProduct = new Map();
    for (let index of array) {
        let [townName, productName, productPrice] = index.split(/\s*\|\s*/);
        if (!townByProduct.has(productName)) {
            townByProduct.set(productName, new Map())
        }

        townByProduct.get(productName).set(townName, productPrice);

    }

    for (let [product, townPrice] of townByProduct) {
        let town = [...townPrice].sort((a,b) => a[1] - b[1])[0][0];
        let lowestPrice = [...townPrice][0][1];
        console.log(`${product} -> ${lowestPrice} (${town})`);
    }
    
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
