function composeImgTag(input) {
    let imgLocation = input[0];
    let alternateText = input[1];
    console.log(`<img src="${imgLocation}" alt="${alternateText}">`)
}

composeImgTag(['smiley.gif', 'Smiley Face']);