const { testNumbers } = require('./solution3');
const { expect } = require('chai');

describe('Test', () => {
  describe('sumNumber', () => {
    it('Happy Path', () => {
      expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
    });

    it('Wrong input', () => {
      expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
    });

    it('Happy path negative and positive number', () => {
      expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
    });
  });

  describe('numberChecker', () => {
    it('Wrong input', () => {
      expect(() => testNumbers.numberChecker('a')).to.throw(
        'The input is not a number!'
      );
    });

    it()
  });
});
