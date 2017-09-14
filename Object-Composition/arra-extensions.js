(function solve() {

    let arr = [1, 2, 3];
    Array.prototype.last = function () {
        if (this.length < 1) {
            return undefined;
        }

        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        if (this.length < 1 || n < 1) {
            return undefined;
        }

        let newArray = [];
        for (let i = n; i < this.length; i++) {
            newArray.push(this[i])
        }
        return newArray;
    };

    Array.prototype.take = function (n) {
        if (this.length < 1 || n < 1) {
            return undefined;
        }

        let newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(this[i])
        }
        return newArray;
    };

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'number') {
                sum += this[i];
            }
        }
        return sum;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

solve()