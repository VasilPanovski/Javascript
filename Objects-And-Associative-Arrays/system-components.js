function sortComponents(array) {
    let componentsBySystem = new Map();
    for (let element of array) {
        let [systemName, componentName, subComponentName] = element.split(' | ');
        if (!componentsBySystem.has(systemName)) {
            componentsBySystem.set(systemName, new Map());
        }

        if (!componentsBySystem.get(systemName).has(componentName)) {
            componentsBySystem.get(systemName).set(componentName, [])
        }

        componentsBySystem.get(systemName).get(componentName).push(subComponentName);
    }


    let systemsSorted = Array.from(componentsBySystem.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(componentsBySystem.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            componentsBySystem.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(componentsBySystem.get(s1).size !== componentsBySystem.get(s2).size) {
            return componentsBySystem.get(s2).size - componentsBySystem.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return componentsBySystem.get(system).get(c2).length - componentsBySystem.get(system).get(c1).length;
    }
}

sortComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])