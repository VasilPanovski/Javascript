function findOccurencesOfWordInSentence(sentence, word) {
    sentence = sentence.toLowerCase();
    let count = 0;
    let regex = new RegExp("\\b"+word.toLowerCase()+"\\b", "gi");
    let match = regex.exec(sentence);

    while(match) {
        count++;
        match = regex.exec(sentence);
    }

    console.log(count)
}

findOccurencesOfWordInSentence('How do you plan on achieving that? How? How can you even think of that?', 'how')
