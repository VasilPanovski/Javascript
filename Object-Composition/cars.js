function processCommands(commands) {
    let cmdExecutor = {
        create: function ([obj, inherit, parent]) {
            parent = parent ? objMap.get(parent) : null;
            let newObj = Object.create(parent);
            objMap.set(obj, newObj);
            return newObj;
        },
        set: function ([objName, key, value]) {
            let obj = objMap.get(objName);
            obj[key] = value;
        },
        print: function ([objName]) {
            let obj = objMap.get(objName);
            let objects = [];
            for (let key in obj) {
                objects.push(`${key}:${obj[key]}`);
            }

            console.log(objects.join(', '));
        }
    };

    let objMap = new Map();
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();
        cmdExecutor[action](tokens);
    }
}

processCommands(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)