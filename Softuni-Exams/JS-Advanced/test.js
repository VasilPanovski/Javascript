let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}


describe('Test Summator functions exists', function () {
    it('Should have all properties as expected', function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
    });

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    describe('Test all class functions', function () {
        it('Test toString with empty array', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        });

        it('Test removeByFilter argument is a function', function () {
            sumator.add(1);
            let func = (a) => a < 2;
            sumator.removeByFilter(func)
            expect(typeof func).to.be.equal('function')
        });

        it('add with integers', function () {
            sumator.add(1);
            sumator.add(2);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal('1, 2, 3');
        });

        it('add with floats', function () {
            sumator.add(1.1);
            sumator.add(2.2);
            sumator.add(3.3);
            expect(sumator.toString()).to.be.equal('1.1, 2.2, 3.3');
        });

        it('add with negatives', function () {
            sumator.add(-1);
            sumator.add(-1.1);
            sumator.add(-2);
            expect(sumator.toString()).to.be.equal('-1, -1.1, -2');
        });

        it('add with strings', function () {
            sumator.add('a');
            sumator.add('bb');
            sumator.add('cc');
            expect(sumator.toString()).to.be.equal('a, bb, cc');
        });

        it('add with objects', function () {
            sumator.add({name: 'Pesho'});
            sumator.add({age: 12});
            expect(sumator.toString()).to.be.equal('[object Object], [object Object]');
        });

        it('add with undefined', function () {
            sumator.add(undefined);
            sumator.add(undefined);
            expect(sumator.toString()).to.be.equal(', ');
        });

        it('sumNums empty array', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        });

        it('sumNums array from integers', function () {
            sumator.add(1);
            sumator.add(5);
            sumator.add(10);
            expect(sumator.sumNums()).to.be.equal(16);
        });

        it('sumNums array from floats', function () {
            sumator.add(1.1);
            sumator.add(2.2);
            sumator.add(1.0);
            expect(sumator.sumNums().toFixed(2)).to.be.equal('4.30');
        });

        it('sumNums array with different types', function () {
            sumator.add(2);
            sumator.add(2.2);
            sumator.add('1');
            expect(sumator.sumNums()).to.be.equal(4.2);
        });

        it('sumNums array with negative numbers', function () {
            sumator.add(-2);
            sumator.add(-2.2);
            sumator.add('1');
            expect(sumator.sumNums()).to.be.equal(-4.2);
        });

        it('test filterFunc is a function', function () {
            sumator.add(2);
            sumator.add(1);
            sumator.add(5);
            sumator.removeByFilter(a => a > 1);
            expect(sumator.toString()).to.be.equal('1');
        })

    })
});
