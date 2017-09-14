let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}



describe('Test attachEvent function', function () {

    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('Test function methods if exists', function () {
        it('Test if createList is an object', function () {
            expect(typeof list).to.be.equals('object');
        });

        it('Test add method is a function', function () {
            expect(typeof list.add).to.be.equals('function');
        });

        it('Test shiftLeft method is a function', function () {
            expect(typeof list.shiftLeft).to.be.equals('function');
        });

        it('Test shiftRight method is a function', function () {
            expect(typeof list.shiftRight).to.be.equals('function');
        });

        it('Test swap method is a function', function () {
            expect(typeof list.swap).to.be.equals('function');
        });

        it('Test toString method is a function', function () {
            expect(typeof list.toString).to.be.equals('function');
        });
    });

    describe('Test add function', function () {
        it('With string', function () {
            list.add('Pesho');
            expect(list.toString()).to.be.equals('Pesho');
        });

        it('With numbers', function () {
            list.add(1);
            list.add(5);
            list.add(-3);
            expect(list.toString()).to.be.equals('1, 5, -3');
        });

        it('With floating points', function () {
            list.add(0.1);
            list.add(10.255);
            list.add(-16.20);
            expect(list.toString()).to.be.equals('0.1, 10.255, -16.2');
        });

        it('With object points', function () {
            list.add({name: 'Pesho'});
            expect(list.toString()).to.be.equals('[object Object]');
        });

        it('With undefined points', function () {
            list.add(undefined);
            expect(list.toString()).to.be.equals('');
        });
    });

    describe('Test shiftLeft function', function () {
        it('with one element in data', function () {
            list.add('Pesho');
            list.shiftLeft();
            expect(list.toString()).to.be.equals('Pesho');
        });

        it('with two elements in data', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.shiftLeft();
            expect(list.toString()).to.be.equals('Gosho, Pesho');
        });

        it('with two meny lements in data', function () {
            list.add(10);
            list.add(2);
            list.add(3);
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.be.equals('2, 3, 1, 10');
        });

        it('with different data types in data', function () {
            list.add('Lili');
            list.add(6);
            list.add(-0.2);
            list.shiftLeft();
            expect(list.toString()).to.be.equals('6, -0.2, Lili');
        });
    })

    describe('Test shiftRight function', function () {
        it('with one element in data', function () {
            list.add('Pesho');
            list.shiftRight();
            expect(list.toString()).to.be.equals('Pesho');
        });

        it('with two elements in data', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.shiftRight();
            expect(list.toString()).to.be.equals('Gosho, Pesho');
        });

        it('with two meny lements in data', function () {
            list.add(10);
            list.add(2);
            list.add(3);
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equals('1, 10, 2, 3');
        });

        it('with different data types in data', function () {
            list.add('Lili');
            list.add(6);
            list.add(-0.2);
            list.shiftRight();
            expect(list.toString()).to.be.equals('-0.2, Lili, 6');
        });
    });

    describe('Test swap function', function () {
        it('index1 not integer return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap('2', 1)).to.be.false;
        });

        it('index1 not integer did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap('2', 1)
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index1 < 0 return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(-1, 1)).to.be.false;
        });

        it('index1 < 0 did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(-1, 1)
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index1 = data length return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(3, 1)).to.be.false;
        });

        it('index1 = data length did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(3, 1)
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index1 > data length return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(5, 1)).to.be.false;
        });

        it('index1 > data length did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(4, 1)
            expect(list.toString()).to.be.equals('1, 2, 3');
        });


        it('index2 not integer return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, '2')).to.be.false;
        });

        it('index2 not integer did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(1, '2')
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index2 < 0 return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(2, -3)).to.be.false;
        });

        it('index2 < 0 did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(2, -1);
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index2 = data length return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(2, 3)).to.be.false;
        });

        it('index2 = data length did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(1, 3);
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index2 > data length return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 4)).to.be.false;
        });

        it('index2 > data length did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(2, 5);
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('index1 = index2 return false', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 1)).to.be.false;
        });

        it('index1 = index2 did not modify data', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(2, 2);
            expect(list.toString()).to.be.equals('1, 2, 3');
        });

        it('with correct indexes', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.swap(0, 1);
            expect(list.toString()).to.be.equals('2, 1, 3');
        });
    })

});