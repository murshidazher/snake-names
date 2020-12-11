/* global describe, expect, it */

const snakeNames = require('../src/index');

const allSnake = snakeNames.all;

describe('snake names', function() {
  describe('all', function() {
    it('should return an object containing all 1082 snake names', function() {
      expect(Object.keys(allSnake).length).toEqual(1082);
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
    const maleSnake = Object.keys(snakeNames.male).map(
      snake => snakeNames.male[snake],
    );
    const femaleSnake = Object.keys(snakeNames.female).map(
      snake => snakeNames.female[snake],
    );
    it('should ONLY contain names of male snake', function() {
      expect(maleSnake).not.toEqual(expect.arrayContaining(femaleSnake));
    });

    it('should ONLY contain names of female snake', function() {
      expect(femaleSnake).not.toEqual(expect.arrayContaining(maleSnake));
    });
  });
});
