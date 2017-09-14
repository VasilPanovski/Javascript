function countWords(array) {
    let obj = {};
    for (let text of array) {
        let words = text.split(/\W+/).filter(w => w !== '');
        for(let word of words) {
            if(!obj.hasOwnProperty(word)) {
                obj[word] = 1;
            } else {
                obj[word] += 1;
            }
        }
    }
    console.log(JSON.stringify(obj));
}

countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);
