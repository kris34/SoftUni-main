const { bookSelection } = require('./solution1');
const { expect } = require('chai');

describe('Test', () => {
  describe('isGenderSuitable', () => {
    it('happy path', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal(
        'Those books are suitable'
      );
      expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal(
        'Those books are suitable'
      );
      expect(bookSelection.isGenreSuitable('a', 20)).to.equal(
        'Those books are suitable'
      );
      expect(bookSelection.isGenreSuitable('a', 10)).to.equal(
        'Those books are suitable'
      );
    });

    it('inappropriate genre for the age', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(
        `Books with Thriller genre are not suitable for kids at 11 age`
      );
      expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(
        `Books with Horror genre are not suitable for kids at 11 age`
      );
    });

    it('inappropriate genre for the age, edge case', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
            `Books with Thriller genre are not suitable for kids at 12 age`
          );
          expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
            `Books with Horror genre are not suitable for kids at 12 age`
          );
    });
  });
});
