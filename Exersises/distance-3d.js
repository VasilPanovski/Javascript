function getDistanceBetween3DPoints(input) {
    let a = {x: input[0], y: input[1], z: input[2]};
    let b = {x: input[3], y: input[4], z: input[5]};
    let distance = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
    console.log(distance);
}


getDistanceBetween3DPoints([3.5, 0, 1, 0, 2, -1]);