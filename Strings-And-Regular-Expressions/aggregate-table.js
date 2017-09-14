function aggregateTable(array) {
    let sum = 0;
    let towns = [];
    let currentStr = '';
    let town = '';
    for (let i = 0; i < array.length; i++) {
        currentStr = array[i].split('|');
        console.log(currentStr)
        town = currentStr[1];
        sum += Number(array[2].trim());
        towns.push(town.trim());

    }
    console.log(towns.join(', '))
    console.log(sum);
}


aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
])