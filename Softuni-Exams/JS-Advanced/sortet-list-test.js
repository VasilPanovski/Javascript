let expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}


describe('Sorted list', function () {
    let list;
    beforeEach(function () {
        list = new SortedList;
    });

    describe('Sorted list properties and functions exists', function () {
        it('add', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });

        it('remove', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
        });

        it('get', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
        });

        it('vrfRange', function () {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
        });

        it('sort', function () {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.be.true;
        });

        it('size', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        });
    });

    describe('Test verfRange', function () {
        it('with empty list', function () {
            expect(() => list.vrfyRange(1)).to.throw(Error)
        });

        it('with index < 0', function () {
            expect(() => list.vrfyRange(-1)).to.throw(Error)
        });

        it('with index = list length', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(() => list.vrfyRange(3)).to.throw(Error)
        });

        it('with index > list length', function () {
            list.add(5);
            list.add(6);
            list.add(7);
            expect(() => list.vrfyRange(4)).to.throw(Error)
        });
    });

    describe('Test add', function () {
        it('with empty arr', function () {
            list.add(2);
            expect(list.get(0)).to.be.equal(2)
        });

        it('with two digits', function () {
            list.add(2);
            list.add(3);
            expect(list.get(0) + list.get(1)).to.be.equal(5)
        });

        it('with two numbers with floating point', function () {
            list.add(1.2);
            list.add(-2.5);
            expect(list.get(0) + list.get(1)).to.be.equal(-1.3)
        });

        it('with two strings', function () {
            list.add('Post');
            list.add('man');
            expect(list.get(0) + list.get(1)).to.be.equal('Postman')
        });

        it('with object', function () {
            list.add({name: 'Pesho'});
            expect(list.get(0).name).to.be.equal('Pesho')
        });

        it('with undefined', function () {
            list.add(undefined);
            expect(list.get(0)).to.be.undefined;
        });

        it('with negative numbers', function () {
            list.add(-20);
            list.add(-1.5);
            expect(list.get(0) + list.get(1)).to.be.equal(-21.5);
        });
    });

    describe('Test remove', function () {
        it('with empty list', function () {
            expect(() => list.remove(0)).to.throw(Error);
        });

        it('with correct index', function () {
            list.add(1);
            list.add(2);
            list.remove(0);
            expect(list.get(0)).to.be.equal(2);
        });
    });

    describe('Test sort', function () {
        it('test with one element arr', function () {
            list.add(1);
            list.sort();
            expect(list.get(0)).to.be.equal(1);
        });

        it('test with three integers', function () {
            list.add(3);
            list.add(1);
            list.add(2);
            list.sort();
            expect(list.get(0)).to.be.equal(1);
        });

        it('test with three strings', function () {
            list.add('3');
            list.add('1');
            list.add('2');
            list.sort();
            expect(list.get(0)).to.be.equal('1');
        });

        it('test with three numbers with floating point', function () {
            list.add(3.2);
            list.add(2.2);
            list.add(1.2);
            list.sort();
            expect(list.get(0)).to.be.equal(1.2);
        });

        it('test with three numbers negative numbers', function () {
            list.add(-2.1);
            list.add(1.1);
            list.add(-4);
            list.sort();
            expect(list.get(0)).to.be.equal(-4);
        });

        it('test with two objects', function () {
            list.add([2, 2]);
            list.add([1, 1]);
            list.sort();
            expect(list.get(1)[0]).to.be.equal(1);
        });

        it("should be sorted after adding", function() {
            list.add(5);
            expect(list.get(0)).to.equal(5);
            list.add(2);
            expect(list.get(0)).to.equal(2);
            expect(list.get(1)).to.equal(5);
        });

        it("should be sorted after removing", function() {
            list.add(4);
            list.add(1);
            list.add(10);
            list.remove(1);
            expect(list.get(0)).to.equal(1);
            expect(list.get(1)).to.equal(10);
        });
    });

    describe('Test size', function () {
        it('with empty list', function () {
            expect(list.size).to.be.equal(0)
        });

        it('with filled list', function () {
            list.add(1);
            list.add(2);
            list.add(1);
            expect(list.size).to.be.equal(3)
        });
    })

    describe('Test get', function () {
        it('with one element', function () {
            list.add(1);
            expect(list.get(0)).to.be.equal(1)
        });

        it('with three elements', function () {
            list.add(1);
            list.add(2);
            list.add(10);
            expect(list.get(list.size - 1)).to.be.equal(10)
        });
    })
});
