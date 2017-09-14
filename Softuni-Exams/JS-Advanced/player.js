class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        let validScore = Number(score);
        if (!isNaN(validScore) && score !== null) {
            this.scores.push(score);
            this.scores.sort((a,b) => b - a);
        }

        return this;
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        return this.scores[0];
    }

    get topFiveScore() {
        return this.scores.slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.scores}]`;
    }
}


let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);

console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180)
    .addScore(null);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);
/*
Highest score: undefined
Top 5 score: []
Peter: []
Score count: 0
Highest score: 450
Top 5 score: [450,200]
Peter: [450,200]
Highest score: 2000
Top 5 score: [2000,700,700,450,300]
Peter: [2000,700,700,450,300,200,50]
Score count: 7
Highest score: 779
Top 5 score: [779,350,180]
Maria: [779,350,180] */