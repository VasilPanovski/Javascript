function changeArrayByCommands(commands) {
    let array = [];
    let initialValue = 1;
    for (let command of commands) {
        switch (command) {
            case 'add':
                array.push(initialValue);
                break;
            case 'remove':
                if (array.length === 0) {
                    break;
                }

                array.pop();

                break;
            default: break;
        }
        initialValue++;
    }

    if (array.length === 0) {
        console.log('Empty')
    } else {
        for (let element of array) {
            console.log(element);
        }
    }
}

changeArrayByCommands(['add', 'add', 'add', 'add']);
changeArrayByCommands(['add', 'add', 'remove', 'add', 'add']);
changeArrayByCommands(['remove', 'remove', 'remove']);
