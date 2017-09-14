function countWords(array) {
    let wordsMap = new Map();
    for (let current of array) {
        let words = current.toLowerCase().split(/\W+/).filter(w => w !== '');
        for (let word of words) {
            if (!wordsMap.has(word)) {
                wordsMap.set(word, 0);
            }

            wordsMap.set(word, wordsMap.get(word) + 1);
        }
    }

    let sorted = Array.from(wordsMap.keys()).sort();
    for(let key of sorted) {
        console.log("'" + key + "'" + " -> " + wordsMap.get(key) + " times");
    }
}

countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);
