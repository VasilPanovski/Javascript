function solve() {
    let obj, type;
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        obj = arguments[i];
        type = typeof obj;
        console.log(type + ': ' + obj);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    sortedTypes.sort((a, b) => b[1] - a[1]);
    sortedTypes.forEach(e => console.log(e[0] + ' = ' + e[1]));
}

solve('cat', 42, function () { console.log('Hello world!'); });
