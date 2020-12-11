const maleSnake = require('./data/male-snake.json');
const femaleSnake = require('./data/female-snake.json');
const cuteSnake = require('./data/cute-snake.json');
const badassSnake = require('./data/badass-snake.json');
const famousSnake = require('./data/famous-snake.json');
const uniqueSnake = require('./data/unique-snake.json');
const uniqueRandomArray = require('unique-random-array');
const { flatZip } = require('flat-zip');

const allSnake = flatZip([
  maleSnake,
  femaleSnake,
  cuteSnake,
  badassSnake,
  famousSnake,
  uniqueSnake,
]);
const getRandomSnake = uniqueRandomArray(allSnake);

const random = function(n) {
  if (n === undefined) return getRandomSnake();
  const randomSnake = [];
  for (var i = 0; i < n; i++) {
    randomSnake.push(getRandomSnake());
  }
  return randomSnake;
};

exports.female = femaleSnake;
exports.male = maleSnake;
exports.cute = cuteSnake;
exports.badass = badassSnake;
exports.famous = famousSnake;
exports.unique = uniqueSnake;
exports.all = allSnake;
exports.random = random;

exports.femaleRandom = uniqueRandomArray(femaleSnake);
exports.maleRandom = uniqueRandomArray(maleSnake);
exports.cuteRandom = uniqueRandomArray(cuteSnake);
exports.badassRandom = uniqueRandomArray(badassSnake);
exports.famousRandom = uniqueRandomArray(famousSnake);
exports.uniqueRandom = uniqueRandomArray(uniqueSnake);
exports.allRandom = uniqueRandomArray(allSnake);
