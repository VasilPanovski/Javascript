function solve(arr) {

    let result = [];
    for (let x of arr) {
        if (!isNaN(Number(x))) {
            result.push(Number(x));
        } else {
            if (result.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            let secondNum = result.pop();
            let firstNum = result.pop();
            switch (x) {
                case '+': result.push(firstNum + secondNum); break;
                case '-': result.push(firstNum - secondNum); break;
                case '*': result.push(firstNum * secondNum); break;
                case '/': result.push(firstNum / secondNum); break;
            }
        }
    }

    if (result.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result[0])
    }
}

// solve([5,
//     3,
//     4,
//     '*',
//     '-']
// );

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']







)
