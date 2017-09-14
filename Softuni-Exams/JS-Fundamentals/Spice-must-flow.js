function solve(yieldStr) {
    let spiceYield = Number(yieldStr);
    let totalYield = 0;
    let workersConsume = 26;
    let daysCount = 0;
    while (spiceYield >= 100) {
        daysCount++;
        totalYield += spiceYield - workersConsume;
        spiceYield -= 10;
    }
    console.log(daysCount);
    totalYield = totalYield - workersConsume < 0 ? 0 : totalYield - workersConsume;
    console.log(totalYield)
}


solve('450')