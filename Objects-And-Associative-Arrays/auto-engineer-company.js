function storeCarsByBrandsAndModels(array) {
    let carsByBrands = new Map();
    for (let element of array) {
        let [brand, model, producedCars] = element.split(' | ');
        if (!carsByBrands.has(brand)) {
            carsByBrands.set(brand, new Map());
        }

        if (!carsByBrands.get(brand).has(model)) {
            carsByBrands.get(brand).set(model, 0);
        }

        carsByBrands.get(brand).set(model, carsByBrands.get(brand).get(model) + Number(producedCars));
    }

    for (let [brandName, carsByModel] of [...carsByBrands]) {
        console.log(brandName);
        for (let [modelName, carsCount] of [...carsByModel]) {
            console.log('###' + modelName + ' -> ' + carsCount);
        }
    }
}

storeCarsByBrandsAndModels([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
