function populationInTown(array) {
    let cityMap = new Map();
    for (let token of array) {
        let [city, population] = token.split(' <-> ');
        if (!cityMap.has(city)) {
            cityMap.set(city, 0);
        }

        cityMap.set(city, cityMap.get(city) + Number(population));
    }

    for (let pair of [...cityMap]) {
        console.log(pair[0] + ' : ' + pair[1]);
    }
}

populationInTown([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]);