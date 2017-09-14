function getModel() {
    let num1, num2, result;

    function init(inputNum1, inputNum2, inputResult) {
        num1 = $(inputNum1);
        num2 = $(inputNum2);
        result = inputResult;
    }
    
    function add() {
        $(result).val(Number(num1.val()) + Number(num2.val()));
    }

    function subtract() {
        $(result).val(Number(num1.val()) - Number(num2.val()));
    }

    return {
        init,
        add,
        subtract
    }
}
