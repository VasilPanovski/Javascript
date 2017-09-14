function collectUsernames(input) {
    let userNames = new Set;
    for (let name of input) {
        userNames.add(name);
    }
    function compareNames(nameA,nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }

        return nameA.localeCompare(nameB);
    }
    console.log([...userNames].sort(compareNames).join('\n'));
}

collectUsernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);