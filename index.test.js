const multiplyTest = require('./src/methods/multiply');
const {add, multiply} = require('.');

test('that is true', () => {
    expect(true).toBe(true);
});

describe('Add function', () => {
    it('should return correct result', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should return correct result when one of args is negative', () => {
        expect(add(-1, 1)).toBe(0);
    });

    it('should return correct result when both of args are negative', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    it('should return correct result when both of args are negative', () => {
        expect(add(-1, -3)).toBe(-4);
    });
});


describe('Multiply function', () => {
    it('should return correct result', () => {
        expect(multiply(9, 2)).toBe(18);
        expect(multiply(10, 10)).toBe(100);
        expect(multiply(-3, 20)).toBe(-60);
    })
});
