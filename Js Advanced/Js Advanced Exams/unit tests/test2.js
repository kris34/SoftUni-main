const { flowerShop } = require('./solution2');
const { expect } = require('chai');

describe('Test', () => {
  describe('calcPriceOfFlowers', () => {
    it('Happy path', () => {
      expect(flowerShop.calcPriceOfFlowers('Rose', 2, 2)).to.equal(
        `You need $4.00 to buy Rose!`
      );
    });

    it('Wrong input', () => {
      expect(() => flowerShop.calcPriceOfFlowers(1, 'a', 'b')).to.throw();
    });
  });

  describe('checkFlowersAvailable', () => {
    it('includes All', () => { 
      expect(
        flowerShop.checkFlowersAvailable('rose', ['rose', 'lily'])
      ).to.equal('The rose are available!');
    });

    it('doesnt incluse', () => {
      expect(flowerShop.checkFlowersAvailable('rose', ['lili'])).to.equal(
        'The rose are sold! You need to purchase more!'
      );
    });
  });

  describe("sellFlowers", () => { 
    it("works", () => { 
        expect(flowerShop.sellFlowers(["Rose", "Lily ", "Orchid"], 1)).to.equal("Rose / Orchid")
    })
  })


});
