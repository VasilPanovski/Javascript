function solve(ballots) {
    let result = new Map();
    let systemVotes = new Map();
    let systemWinners = new Map();

    for (let ballot of ballots) {
        if (!result.has(ballot.system)) {
            result.set(ballot.system, new Map());
            systemVotes.set(ballot.system, 0);
            systemWinners.set(ballot.system, null);
        }

        if (!result.get(ballot.system).has(ballot.candidate)) {
            result.get(ballot.system).set(ballot.candidate, 0);
        }

        let currentVotes = result.get(ballot.system).get(ballot.candidate);
        result.get(ballot.system).set(ballot.candidate, currentVotes + Number(ballot.votes));
        systemVotes.set(ballot.system, systemVotes.get(ballot.system) + Number(ballot.votes))
        systemWinners.set(ballot.system, [ballot.candidate, ballot.votes])

    }
    systemVotes = [...systemVotes].sort((a,b) => b[1] - a[1]);
    let systemWinner = systemVotes[0][0];
    let allSystemVotes = systemVotes[0][1];
    let winnerVotes = Array.from(result.get(systemWinner))[0][1];
    let winnerName = systemWinners.get(systemWinner)[0];

    let secondWinnerName = '';
    if (winnerVotes > allSystemVotes / 2) {
        secondWinnerName = Array.from(result.get(systemVotes[1][0]))[1][0];
        console.log(`${winnerName} wins with ${allSystemVotes} votes`);
        console.log('Runner up: ' + secondWinnerName);
        let systemsWonByRunnerUp = Array.from(result).sort((m1, m2) => m2[1] - m1[1]).filter((m) => m[0] !== systemWinner).map(m => m[0]);

        for (let system of systemsWonByRunnerUp) {
            console.log(system + ': ' + systemVotes.filter(s => s[0] === system).map(s => s[1]))
        }
    } else {
        let secondWinnerVotes = systemWinners.get(systemWinner)[1];
        console.log(`Runoff between ${winnerName} with ${Math.floor(allSystemVotes * winnerVotes / 100)} and ${secondWinnerName} with ${allSystemVotes * secondWinnerVotes / 100}`)
    }


}


solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);

solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
)