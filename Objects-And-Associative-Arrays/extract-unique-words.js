function extractUniqueWords(array) {
    let uniqueWords = new Set();
    for (let sentence of array) {
        let words = sentence.split(/\W+/).filter(w => w !== '').map(w => w.toLocaleLowerCase());
        for (let word of words) {
            uniqueWords.add(word)
        }
    }
    console.log([...uniqueWords].join(', '))
}

extractUniqueWords([
    'Interdum et malesuada fames ac ante ipsum primis in faucibus.Vestibulum volutpat lacinia blandit.Pellentesque dignissim odio in hendrerit lacinia.Interdum et malesuada fames ac ante ipsum primis in faucibus.Vestibulum volutpat lacinia blandit.Pellentesque dignissim odio in hendrerit lacinia.'
]);
