const { motorcycleRider } = require('./solution');
const { expect } = require('chai');

describe('Test', () => {
  describe('licenseRestriction', () => {
    it('AM', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal(
        'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      );
    });

    it('A1', () => {
      expect(motorcycleRider.licenseRestriction('A1')).to.equal(
        'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      );
    });

    it('A2', () => {
      expect(motorcycleRider.licenseRestriction('A2')).to.equal(
        'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      );
    });

    it('A', () => {
      expect(motorcycleRider.licenseRestriction('A')).to.equal(
        'No motorcycle restrictions, and the minimum age is 24.'
      );
    });

    it('R', () => {
      expect(() => motorcycleRider.licenseRestriction('R')).to.throw(
        'Invalid Information!'
      );
    });
  });

  describe('motorcycleShowroom', () => {
    it('invalid input', () => {
      expect(() => motorcycleRider.motorcycleShowroom('10', 'a')).to.throw(
        'Invalid Information!'
      );
    });
    it('invalid input 2', () => {
      expect(() => motorcycleRider.motorcycleShowroom(['500'], 49)).to.throw(
        'Invalid Information!'
      );
    });
    it('invalid input 3', () => {
      expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw(
        'Invalid Information!'
      );
    });

    it('Test 1', () => {
      expect(motorcycleRider.motorcycleShowroom(['100', '100'], 200)).to.equal(
        'There are 2 available motorcycles matching your criteria!'
      );
    });

    it('Test 2', () => {
      expect(motorcycleRider.motorcycleShowroom(['100', '200'], 200)).to.equal(
        'There are 2 available motorcycles matching your criteria!'
      );
    });
  });

  describe('otherSpendings', () => {
    it('invalid input', () => {
      expect(() => motorcycleRider.otherSpendings('a', 'b', 1)).to.throw(
        'Invalid Information!'
      );
    });

    it('No discount', () => {
      expect(motorcycleRider.otherSpendings(['helmet'], [], false)).to.equal(
        'You spend $200.00 for equipment and consumables!'
      );
      expect(motorcycleRider.otherSpendings(['jacked'], [], false)).to.equal(
        'You spend $300.00 for equipment and consumables!'
      );

      expect(
        motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)
      ).to.equal('You spend $330.00 for equipment and consumables!');
    });

    it('Discount', () => {
      expect(motorcycleRider.otherSpendings(['helmet'], [], true)).to.equal(
        'You spend $180.00 for equipment and consumables with 10% discount!'
      );

      expect(
        motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)
      ).to.equal('You spend $297.00 for equipment and consumables!');
    });
  });
});
