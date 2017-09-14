function gradesToDegrees(grades) {
    let degrees = (Number(grades) * 3.6 / 4) % 360;
    if (degrees < 0) {
        degrees += 360;
    }
    console.log(degrees);
}

gradesToDegrees(-50);
