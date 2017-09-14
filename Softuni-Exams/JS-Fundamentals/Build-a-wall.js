function solve(arr) {
    let initialHeights = arr.map(Number).sort((a,b) => a - b);
    let crews = initialHeights.length;
    let result = [];
    let dayCubic = 0;
    while (initialHeights.length > 0) {

        for (let i = 0; i < initialHeights.length; i++) {
            if (initialHeights[i] >= 30) {
                initialHeights.pop();
                break;
            }

            dayCubic += 195;
            initialHeights[i]++;
        }

        if (dayCubic !== 0) {
            result.push(dayCubic);
        }
        dayCubic = 0;
    }

    console.log(result.join(', '));
    let pesos = 0;
    for (let dayCubic of result) {
        pesos += dayCubic * 1900;
    }
    console.log(pesos + ' pesos')
}


// solve([21, 25, 28])
// solve([17]);
solve([17,
22,
17,
19,
17])