function findTreasure(chestsCoordinates) {

    let tokelau = {name: 'Tokelau', x1: 8, y1 : 0, x2: 9, y2: 1};
    let tuvalu = {name: 'Tuvalu', x1: 1, y1 : 1, x2: 3, y2: 3};
    let samoa = {name: 'Samoa', x1: 5, y1 : 3, x2: 7, y2: 6};
    let tonga = {name: 'Tonga', x1: 0, y1 : 6, x2: 2, y2: 8};
    let cook = {name: 'Cook', x1: 4, y1 : 7, x2: 9, y2: 8};
    let islands = [tokelau, tuvalu, samoa, tonga, cook];

    let x, y = 0;
    for (let i = 0; i < chestsCoordinates.length; i+=2) {
        x = chestsCoordinates[i];
        y = chestsCoordinates[i+1];
        let result = tryFindIsland(islands, x, y);
        console.log(result);
    }

    function tryFindIsland(islands, x, y) {
        let currentIsland;
        for (let i = 0; i < islands.length; i++) {
            currentIsland = islands[i];
            if ((x >= currentIsland.x1 && x <= currentIsland.x2) &&
                (y >= currentIsland.y1 && y <= currentIsland.y2)) {
                return currentIsland.name;
            }
        }

        return 'On the bottom of the ocean';
    }
}

findTreasure([4, 2, 1.5, 6.5, 1, 3]);
findTreasure([6, 4]);