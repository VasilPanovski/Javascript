function solve(arr) {
    let string = arr[0];
    let specialSymbols = '.,!?:;';
    let dotsPattern = /\s+[\s|\.]+/g;
    let numbersAfterDotPattern = /\s+[0-9]+/g;

    for (let char of string) {
        if (specialSymbols.includes(char)) {

        }
    }

}


solve([`Terribly formatted text . With chaotic spacings." Terrible quoting "! Also
this date is pretty confusing : 20 . 12. 16 .
`])