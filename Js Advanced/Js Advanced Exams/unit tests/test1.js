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

  describe('isItAffordable', () => {
    it('happy path', () => {
      expect(bookSelection.isItAffordable(1, 2)).to.equal(
        `Book bought. You have 1$ left`
      );
    });

    it('happy path, edge case', () => {
      expect(bookSelection.isItAffordable(1, 1)).to.equal(
        `Book bought. You have 0$ left`
      );
    });

    it('not enough money', () => {
      expect(bookSelection.isItAffordable(2, 1)).to.equal(
        "You don't have enough money"
      );
    });

    it('invalid input', () => {
      expect(() => bookSelection.isItAffordable(2, '1')).to.throw(
        'Invalid input'
      );
      expect(() => bookSelection.isItAffordable('2', '1')).to.throw(
        'Invalid input'
      );
      expect(() => bookSelection.isItAffordable('2', 1)).to.throw(
        'Invalid input'
      );
    });
  });

  describe('suitableTitles', () => {
    it('happy path, single match', () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: 'aa',
              genre: 'a',
            },
          ],
          'a'
        )
      ).to.deep.equal(['aa']);
    });

    it('happy path, two matches', () => {
      expect(
        bookSelection.suitableTitles(
          [
            {
              title: 'aa',
              genre: 'a',
            },
            {
              title: 'ab',
              genre: 'a',
            },
          ],
          'a'
        )
      ).to.deep.equal(['aa', 'ab']);
    });

    it('No matches', () => {
        expect(
          bookSelection.suitableTitles(
            [
              {
                title: 'bb',
                genre: 'b',
              }
            ],
            'a'
          )
        ).to.deep.equal([]);
      });
  

    it("Invalid input", () => { 
        expect(() => bookSelection.suitableTitles("asd", "asd")).to.throw()
    })

    
  });
});
