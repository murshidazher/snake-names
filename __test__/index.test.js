/* global describe, expect, it */

const snakeNames = require('../src/index');

const allSnake = snakeNames.all;

describe('snake names', function() {
  describe('all', function() {
    it('should return an object containing all 555 snake names', function() {
      expect(Object.keys(allSnake).length).toEqual(555);
    });
  });

  describe('random', function() {
    it('should return a random snake', function() {
      expect(Object.keys(allSnake).map(snake => allSnake[snake])).toContain(
        snakeNames.random(),
      );
    });

    it('should return an array of random snake names if passed a number as a param', function() {
      const threeRandomSnake = snakeNames.random(3);
      expect(threeRandomSnake.length).toBe(3);
    });
  });

  describe('male/female snake', function() {
    const allMaleSnake = Object.keys(snakeNames.allMaleSnake).map(
      snake => snakeNames.allMaleSnake[snake],
    );
    const allFemaleSnake = Object.keys(snakeNames.allFemaleSnake).map(
      snake => snakeNames.allFemaleSnake[snake],
    );
    it('should ONLY contain names of male snake', function() {
      expect(allMaleSnake).not.toEqual(expect.arrayContaining(allFemaleSnake));
    });

    it('should ONLY contain names of female snake', function() {
      expect(allFemaleSnake).not.toEqual(expect.arrayContaining(allMaleSnake));
    });
  });
});
