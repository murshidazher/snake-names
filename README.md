# [snake-names](https://github.com/murshidazher/snake-names)  [![npm](https://img.shields.io/npm/v/snake-names.svg?label=&color=0080FF)](https://github.com/murshidazher/snake-names/releases/tag/v1.0.0)

[![npm](https://img.shields.io/npm/v/snake-names.svg?style=flat-square)](https://www.npmjs.com/package/snake-names)
[![npm](https://img.shields.io/npm/dt/snake-names.svg?style=flat-square)](https://www.npmjs.com/package/snake-names)
[![npm](https://img.shields.io/npm/v/snake-names.svg?style=flat-square)](https://www.npmjs.com/package/snake-names)
[![travisci](https://img.shields.io/travis/com/murshidazher/snake-names/master?style=flat-square)](https://travis-ci.com/)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
![codecov](https://img.shields.io/codecov/c/github/murshidazher/snake-names/master?style=flat-square&token=3d957dab-0e23-4997-8525-a87eb3ffd3b5)

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

