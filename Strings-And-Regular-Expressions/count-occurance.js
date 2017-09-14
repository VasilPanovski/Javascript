function countOccurrences(word, text) {
    let wordCounter = 0;
    let index = text.indexOf(word);
    while (index > -1) {
        wordCounter++;
        index = text.indexOf(word, index + 1);
    }
    console.log(wordCounter);
}

countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');