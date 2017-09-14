function listProcessor(commands) {
    let processCommand = (function () {
        let collection = [];
        return {
            add: (item) => collection.push(item),
            remove: (item) => collection = collection.filter(i => i !== item),
            print: () => console.log(collection)
        }
    })();

    for (let command of commands) {
        let [currentCommand, item] = command.split(' ');
        processCommand[currentCommand](item);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);