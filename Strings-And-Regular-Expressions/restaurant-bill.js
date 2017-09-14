function getPurchasesBill(purchases) {
    let sum = 0;
    let purchaseNames = [];
    for (let i = 0; i < purchases.length; i+=2) {
        purchaseNames.push(purchases[i]);
        sum += Number(purchases[i+1])
    }

    console.log(`You purchased ${purchaseNames.join(', ')} for a total sum of ${sum}`)
}

getPurchasesBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);