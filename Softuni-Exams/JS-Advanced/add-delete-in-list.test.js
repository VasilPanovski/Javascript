let expect = require("chai").expect;

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


describe('Test list data structure', function () {

    let myList = {};
    beforeEach(function () {
        myList = list;
    });
    describe('Test data structure functions', function () {
        it('Test if list is an object', function () {
            expect(typeof myList).to.equal('object', 'The list is not an object')
        });

        it('Test if add is function', function () {
            expect(typeof myList.add).to.equal('function', 'The list method add is not a function')
        });

        it('Test if delete is function', function () {
            expect(typeof myList.delete).to.equal('function', 'The list method delete is not a function')
        });

        it('Test if toString is function', function () {
            expect(typeof myList.toString).to.equal('function', 'The list method toString is not a function')
        });
    });

    describe('Test add function', function () {
        it('Test with one item', function () {
            myList.add('Pesho');
            expect(list.toString()).to.equal('Pesho', 'The add function did not add one item')
        });

        it('Test with floating point items', function () {
            myList.add(0.125);
            myList.add(-15.6);
            myList.add(3);
            expect(myList.toString()).to.equal('Pesho, 0.125, -15.6, 3', 'The add function did not add floating point numbers')
        });

        it('Test with objects', function () {
            list.add([1, 2]);
            list.add([3, 4]);
            expect(list.toString()).to.equal('Pesho, 0.125, -15.6, 3, 1,2, 3,4', 'The add function did not add objects')
        });
    })

    describe('Test delete function', function () {
        it('Test index for invalid type', function () {
            expect(list.delete('1a')).to.equal(undefined, 'Delete function deleted with not number index')
        });


        it('Test index with negative index', function () {
            expect(list.delete(-1)).to.equal(undefined, 'Delete function deleted with negative index')
        });

        it('Test index with index greater than list length', function () {
            expect(list.delete(9999999)).to.equal(undefined, 'Delete function deleted with index greater than list data length')
        });

        it('Test index with index equals to the list length', function () {
            list.delete(5);
            expect(list.toString()).to.equal('Pesho, 0.125, -15.6, 3, 1,2', 'Delete function deleted with index equals to the list data length')
        });

        it('Test with correct index', function () {
            list.delete(0)
            expect(list.toString()).to.equal('0.125, -15.6, 3, 1,2', 'Delete function with correct index did not work as expected')
        });
    })
});
