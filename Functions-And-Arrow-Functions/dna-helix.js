function printDNA(n) {
    let symbols = 'ATCGTTAGGG';
    let symbolIndex = 0;
    for(let i = 0; i < n; i++) {
        if(i % 4 == 0) {
            console.log(`**${symbols[symbolIndex++ % 10]}${symbols[symbolIndex++ % 10]}**`);
        } else if(i % 4 == 1) {
            console.log(`*${symbols[symbolIndex++ % 10]}--${symbols[symbolIndex++ % 10]}*`);
        } else if(i % 4 == 2) {
            console.log(`${symbols[symbolIndex++ % 10]}----${symbols[symbolIndex++ % 10]}`);
        } else if(i % 4 == 3) {
            console.log(`*${symbols[symbolIndex++ % 10]}--${symbols[symbolIndex++ % 10]}*`);
        }
    }
}

printDNA(15);