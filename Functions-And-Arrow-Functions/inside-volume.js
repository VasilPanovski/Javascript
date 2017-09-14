function volume(input) {
    let x, y, z = 0;
    for (let i = 0; i < input.length; i += 3) {
        x = input[i];
        y = input[i + 1];
        z = input[i + 2];

        let inVolume = isInVolume(x, y, z) ? 'inside' : 'outside';
        console.log(inVolume);
    }

    function isInVolume(x, y, z) {
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;

        return (x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2);
    }
}
volume([13.1, 50, 31.5,
        50, 80, 50,
        -5, 18, 43]);