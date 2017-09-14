function solve() {
    let myArr = (() => {
        let array = [];
        let sortOrder = (a, b) => a - b;
        let currentSize = 0;

        let add = function(element) {
            array.push(element);
            currentSize++;
            array.sort(sortOrder);
            return array;
        };
        
        let remove = function(index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                currentSize--;
            }

            return array;
        };
        
        let get = function(index) {
            return array[index];
        };

        let size = function() {
            return currentSize;
        };

        return {add, remove, get, size}
    })();

    return myArr
}

let obj = solve();
console.log(obj.add(5));
console.log(obj.add(-1));
console.log(obj.add(-200));
console.log(obj.add(15));
console.log(obj.remove(0));
console.log(obj.get(0));
console.log(obj.size());