function attachEventsListeners() {
    let rates = {
            'km' : 1000,
            'm' : 1,
            'cm' : 0.01,
            'mm' : 0.001,
            'mi' : 1609.34,
            'yrd' : 0.9144,
            'ft' : 0.3048,
            'in' : 0.0254
    };
    
    document.getElementById('convert').addEventListener('click', convert);
    
    function convert() {
        let input = document.getElementById('inputDistance').value;
        let selectedRate = document.getElementById('inputUnits').value;
        let wantedOutput = document.getElementById('outputUnits').value;
        document.getElementById('outputDistance').value = input * rates[selectedRate] / rates[wantedOutput];
    }
}
