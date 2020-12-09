# [snake-names](https://github.com/murshidazher/snake-names)

> Get popular snake names

__Accepting PRs for additional names.__

## Install

```
$ npm install --save snake-names
```

## Usage

```js
const snakeNames = require('snake-names');

snakeNames.random();
//=> 'Albert'
```

## API

### .all

Type: `array`

Lists all 200 popular snake names

### .allMaleSnake

Type: `array`

Lists all popular male snake names

### .allFemaleSnake

Type: `array`

Lists all popular female snake names

### .random(n: Number)

Type: `function`

Returns a random snake name, if no param is provided. Otherwise, returns an array of random snake of length `n`
