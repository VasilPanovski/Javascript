function getInfraction(input) {
    let currentSpeed = input[0];
    let areaDrivingIn = input[1];

    let difference = getAreaMaxSpeed(areaDrivingIn) - currentSpeed;
    let severity = printResult(difference);
    if (difference > 0) {
        return '';
    } else {
        return severity;
    }

    function printResult(overSpeed) {
        let speed = Math.abs(overSpeed);
        if (speed <= 20) {
            return 'speeding';
        } else if (speed > 20 && speed <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    function getAreaMaxSpeed(drivingArea) {
        switch (drivingArea) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    }
}


console.log(getInfraction([40, 'city']));
console.log(getInfraction([21, 'residential']));
console.log(getInfraction([120, 'interstate']));
console.log(getInfraction([200, 'motorway']));