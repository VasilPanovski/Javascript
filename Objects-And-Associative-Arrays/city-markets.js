function cityMarkets(array) {
    let productsByTown = new Map();
    for (let data of array) {
        let [town, product, amountOfSales, priceForOneUnit] =
            data.split(/s*[->:]+s*/).filter(e => e !== '').map(e => e.trim());
        if (!productsByTown.has(town)) {
            productsByTown.set(town, new Map());
        }

        if (!productsByTown.get(town).has(product)) {
            productsByTown.get(town).set(product, 0);
        }

        let newProductIncome = productsByTown.get(town).get(product) + (Number(amountOfSales) * Number(priceForOneUnit));
        productsByTown.get(town).set(product, newProductIncome);
    }

    for (let entry of [...productsByTown]) {
        console.log('Town - ' + entry[0]);
        for (let innerEntry of [...entry[1]]) {
            console.log(`$$$${innerEntry[0]} : ${innerEntry[1]}`)
        }
    }
}


cityMarkets([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);