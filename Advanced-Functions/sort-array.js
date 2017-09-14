function sortArray(arr, sortMethod) {
    let sortObj = {'asc': sortAscending, 'desc': sortDescending};
    
    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return arr.sort(sortObj[sortMethod])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));