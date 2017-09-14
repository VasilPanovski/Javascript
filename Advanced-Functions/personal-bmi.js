// function solve(aName, aAge, aWeight, aHeight) {
//     let personalInfo = {age: aAge, weight: aWeight, height: aHeight};
//     let bmi = Math.round(aWeight / Math.pow((aHeight / 100), 2));
//     let status = '';
//     if (bmi < 18.5) {
//         status = '•	underweight';
//     } else if (bmi < 25) {
//         status = 'normal';
//     } else if (bmi < 30) {
//         status = 'overweight';
//     } else if (bmi >= 30) {
//         status = 'obese';
//     }
//
//     let obj = {name: aName, personalInfo, BMI: bmi, status: status};
//     if (status === 'obese') {
//         obj.recomendation = 'admission required';
//     }
//    return obj;
// }

// console.log(solve('Honey Boo Boo', 9, 57, 137));

function calculateBMI(aName, aAge, aWeight, aHeight) {

    let personData = {
        name: '',
        personalInfo: {
            age: 0,
            weight: 0,
            height: 0
        },
        BMI: undefined,
        status: undefined
    };

    (function setter() {
        personData.name = aName;
        personData.personalInfo.age = aAge;
        personData.personalInfo.weight = aWeight;
        personData.personalInfo.height = aHeight;
    })();

    (function setBMI() {
        let bmiCalc = Math.round(personData.personalInfo.weight
            / (Math.pow((personData.personalInfo.height / 100), 2)));
        personData.BMI = bmiCalc;
    })();

    (function setStatus() {
        let underweight = 'underweight';
        let normal = 'normal';
        let overweight = 'overweight';
        let obese = 'obese';
        let bmi = personData.BMI;
        bmi >= 30 ?
            personData.status = obese : bmi >= 25 ?
            personData.status = overweight : bmi >= 18.5 ?
                personData.status = normal :
                personData.status = underweight;
    })();

    (function setRecommendation() {
        let recommendation = 'admission required';
        personData.status === 'obese' ?
            personData.recommendation = recommendation : null;
    })();

    function name() {
        return personData.name;
    }

    function age() {
        return personData.personalInfo.age;
    }

    function weight() {
        return personData.personalInfo.weight;
    }

    function height() {
        return personData.personalInfo.height;
    }

    function BMI() {
        return personData.BMI;
    }

    function status() {
        return personData.status;
    }

    function resommendation() {
        if (personData.recommendation) {
            return personData.recommendation;
        }
    }

    return personData;
}
//calcBMI('Peter', 29, 75, 182);
console.log(calculateBMI('Honey Boo Boo', 9, 57, 137));