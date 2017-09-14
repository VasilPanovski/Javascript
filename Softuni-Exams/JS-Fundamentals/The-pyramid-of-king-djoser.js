function solve(base, increment) {
    let outerBlocks = 0;
    let stoneBlocks = 0;
    let allBlocks = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let steps = 1;

    while(base > 2) {
        allBlocks = base * base;
        outerBlocks = (base * 4) - 4;
        stoneBlocks = allBlocks - outerBlocks;
        stone += stoneBlocks * increment;
        if (steps % 5 === 0) {
            lapis += outerBlocks * increment;
        } else {
            marble += outerBlocks * increment;
        }
        steps++;
        base -= 2;
    }

    let gold = Math.pow(base, 2) * increment;
    console.log('Stone required: ' + Math.ceil(stone));
    console.log('Marble required: ' + Math.ceil(marble));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis));
    console.log('Gold required: ' + Math.ceil(gold));
    console.log('Final pyramid height: ' + Math.floor(steps * increment))
}
// solve(12, 1)
// solve(11, 1);
// solve(11, 0.75)
// solve(23, 0.5)
// solve(7, 1)
// solve(1, 8)