function solve(array) {
    let specialKey = array.shift();
    let pattern = `(?:^|\\s)(?:${specialKey}\\s+)([A-Z!%$#]{8,})(?:\\s|\\.|,|$)`;
    let regex = new RegExp(pattern, 'gi');
    for (let text of array) {
        let match;
        while ((match = regex.exec(text)) !== null) {
            // var count = (text.match(regex) || []).length;
            if (match[1].toUpperCase() !== match[1])
                continue;

            text = text.replace(regex, decodeMessage);
        }
        console.log(text);

        function decodeMessage(message) {
            message = message
                .replace(/!/g, '1')
                .replace(/%/g, '2')
                .replace(/\#/g, '3')
                .replace(/\$/g, '4')
                .replace(/[A-Z]/g, s=>s.toLowerCase());
            return message;
        }
    }
}

solve([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);
console.log()
solve([
        'enCode',
        'Some messages are just not encoded what can you do?',
        'RE - ENCODE THEMNOW! - he said.',
        'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);