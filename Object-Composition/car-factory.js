function carFactory(requiredCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: requiredCar.color }, { type: 'coupe', color: requiredCar.color }];
    let wheelsize = requiredCar.wheelsize % 2 === 1 ? requiredCar.wheelsize : requiredCar.wheelsize - 1;

    return {
        model: requiredCar.model,
        engine: engines.filter(e => e.power >= requiredCar.power)[0],
        carriage: carriages.filter(c => c.type === requiredCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}


console.log(carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));