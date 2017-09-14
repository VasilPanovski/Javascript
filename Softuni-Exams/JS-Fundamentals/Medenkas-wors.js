function solve(dataRows) {
    let vConsecutiveAttacks = 0;
    let nConsecutiveAttacks = 0;
    let nDamageDealt = 0;
    let vDamageDealt = 0;
    let vLastDamage = -1;
    let nLastDamage = -1;
    let damage;
    for (let dataRow of dataRows) {
        let [medenkasCount, medenka, empty] = dataRow.split(/\s+/);
        damage = Number(medenkasCount) * 60;
        if (medenka === 'dark') {
            if (nLastDamage === damage) {
                nConsecutiveAttacks++;
            } else {
                nConsecutiveAttacks = 1;
            }

            if (nConsecutiveAttacks === 5) {
                nDamageDealt += damage * 4.5;
                nLastDamage = damage * 4.5;
                nConsecutiveAttacks = 0;
            } else {
                nDamageDealt += damage;
                nLastDamage = damage;
            }

        } else {
            if (vLastDamage === damage) {
                vConsecutiveAttacks++;
            } else {
                vConsecutiveAttacks = 1;
            }

            if (vConsecutiveAttacks === 2) {
                vDamageDealt += damage * 2.75;
                vLastDamage = damage * 2.75;
                vConsecutiveAttacks = 0;
            } else {
                vDamageDealt += damage;
                vLastDamage = damage;
            }

        }
    }

    if (vDamageDealt > nDamageDealt) {
        console.log('Winner - Vitcor');
        console.log('Damage - ' + vDamageDealt)
    } else {
        console.log('Winner - Naskor');
        console.log('Damage - ' + nDamageDealt)
    }
}

solve([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
])

solve([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
])
