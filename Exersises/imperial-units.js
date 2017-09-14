function convertFromInchesToFeedAndInches(inches) {
    let foots = Math.floor(inches / 12);
    let inchesLeft = inches % 12;
    console.log(foots + '\'-' + inchesLeft + '"');
}

convertFromInchesToFeedAndInches(11);