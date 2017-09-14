function compoundInterest(input) {
    let tokens = input.map(Number);
    let principal = tokens[0];
    let interestRate = tokens[1];
    let compoundingPeriod = tokens[2];
    let timespan = tokens[3];
    let compoundInterest = principal * Math.pow(1 + interestRate/(100*( 12/compoundingPeriod)), 12/compoundingPeriod * timespan);
    console.log(compoundInterest.toFixed(2));
}

compoundInterest([100000, 5, 12, 25]);
