function extractText(text) {
    let result = text.split('(').filter(i => (text[0] === '(' ? i % 2 !== 0 : i % 2 === 0));
    console.log(result);
    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');