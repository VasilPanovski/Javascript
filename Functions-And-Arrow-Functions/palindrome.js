function isPalindrome(word) {
    let isWordPalindrome = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] != word[word.length - i - 1]) {
            isWordPalindrome = false;
        }
    }

    return isWordPalindrome;
}

console.log(isPalindrome('haha'));
console.log(isPalindrome('pletaelp'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('unitinu'));