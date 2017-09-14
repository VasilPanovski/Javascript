function solve(worker) {
    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += worker.weight * 0.1 * worker.experience;
        worker.handsShaking = false;
    }

    return worker;
}

solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
);
