const maleSnake = require('./data/male-snake.json');
const femaleSnake = require('./data/female-snake.json');
const uniqueRandomArray = require('unique-random-array');
const { flatZip } = require('flat-zip');

const allSnake = flatZip([maleSnake, femaleSnake]);
const getRandomSnake = uniqueRandomArray(allSnake);

const random = function(n) {
  if (n === undefined) return getRandomSnake();
  const randomSnake = [];
  for (var i = 0; i < n; i++) {
    randomSnake.push(getRandomSnake());
  }
  return randomSnake;
};

module.exports = {
  all: allSnake,
  allMaleSnake: maleSnake,
  allFemaleSnake: femaleSnake,
  random: random,
};
