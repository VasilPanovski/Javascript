let expect = require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}


describe("makeList unit tests", function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    describe('Test all for correct types', function () {
        it('Test makeList is a function (should return object)', function () {
            expect(typeof myList).to.equals('object', 'makeList is not an object')
        });

        it('Test addLeft is a function (should return function)', function () {
            expect(typeof myList.addLeft).to.equals('function', 'addLeft is not a function')
        });

        it('Test addRight is a function (should return function)', function () {
            expect(typeof myList.addRight).to.equals('function', 'addRight is not a function')
        });

        it('Test clear is a function (should return function)', function () {
            expect(typeof myList.clear).to.equals('function', 'clear is not a function')
        });

        it('Test toString is a function (should return function)', function () {
            expect(typeof myList.toString).to.equals('function', 'toString is not a function')
        });
    });

    describe('Test addLeft function', function () {
        it('Test with empty array (should add the element correctly)', function () {
            myList.addLeft(5);
            expect(myList.toString()).to.equals('5', 'Not adding to the left')
        });

        it('Test with non empty array (should add the element correctly)', function () {
            myList.addLeft(5);
            myList.addLeft(-4);
            myList.addLeft(10);
            expect(myList.toString()).to.equals('10, -4, 5', 'Not adding to the left correctly')
        });

        it('Test with string elements (should add the elements correctly)', function () {
            myList.addLeft('20');
            myList.addLeft('11');
            expect(myList.toString()).to.equals('11, 20', 'Not adding string elements to the left correctly')
        });

        it('Test with floating point elements (should add the elements correctly)', function () {
            myList.addLeft(-0.12);
            myList.addLeft(13.3);
            expect(myList.toString()).to.equals('13.3, -0.12', 'Not adding floating point elements to the left correctly')
        });

        it('Test with objects (should add the objects correctly)', function () {
            myList.addLeft([1, 2]);
            myList.addLeft(['2', '4']);
            expect(myList.toString()).to.equals('2,4, 1,2', 'Not adding object elements to the left correctly')
        });

        it('Test with undefined element (should add the undefined correctly)', function () {
            myList.addRight(undefined);
            myList.addRight(-10);
            expect(myList.toString()).to.equals(', -10', 'Not adding undefined elements to the left correctly')
        })
    });

    describe('Test addRight function', function () {
        it('Test with empty array (should add the element correctly)', function () {
            myList.addRight(10);
            expect(myList.toString()).to.equals('10', 'Not adding to the right')
        });

        it('Test with non empty array (should add the element correctly)', function () {
            myList.addRight(-3);
            myList.addRight(-4);
            myList.addRight(10);
            expect(myList.toString()).to.equals('-3, -4, 10', 'Not adding to the right correctly')
        });

        it('Test with string elements (should add the elements correctly)', function () {
            myList.addRight('3');
            myList.addRight('4');
            myList.addRight('5');
            expect(myList.toString()).to.equals('3, 4, 5', 'Not adding string elements to the right correctly')
        });

        it('Test with floating point elements (should add the elements correctly)', function () {
            myList.addRight(-0.125);
            myList.addRight(0.25);
            expect(myList.toString()).to.equals('-0.125, 0.25', 'Not adding floating point elements to the left correctly')
        });

        it('Test with objects (should add the objects correctly)', function () {
            myList.addRight([1, 2, 3]);
            myList.addRight(['5', '7']);
            expect(myList.toString()).to.equals('1,2,3, 5,7', 'Not adding object elements to the right correctly')
        });

        it('Test with undefined element (should add the undefined correctly)', function () {
            myList.addRight(5);
            myList.addRight(undefined);
            expect(myList.toString()).to.equals('5, ', 'Not adding undefined elements to the right correctly')
        })
    });
    
    describe('Test clear function', function () {
        it('Test with non empty array (should return [])', function () {
            myList.addRight(5);
            myList.addRight(10);
            myList.addLeft(-1);
            myList.clear();
            expect(myList.toString()).to.equals('', 'Clear list did not remove the lements')
        });

        it('Test with empty array (should return [])', function () {
            expect(myList.clear()).to.equals(undefined, 'Clear list did not work with empty array')
        })
    });
    
    describe('Test toString function', function () {
        it('Test with empty array (should return empty string)', function () {
            expect(myList.toString()).to.equals('', 'toString function did not work with empty array')
        });

        it('Test with elements (should return elements correctly)', function () {
            myList.addLeft(1);
            myList.addRight(5);
            myList.addRight('-10');
            expect(myList.toString()).to.equals('1, 5, -10', 'toString function did not work correctly')
        });

        it('Test with object (should return elements correctly)', function () {
            myList.addLeft([1, 2]);
            myList.addRight([2, 3]);
            myList.addRight('-10');
            expect(myList.toString()).to.equals('1,2, 2,3, -10', 'toString function did not work with objects correctly')
        })
    })
});