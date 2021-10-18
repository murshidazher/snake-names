#!/usr/bin/env node
'use strict';
const meow = require('meow');
const snakeNames = require('.');

const cli = meow(
  `
	Usage:
	  $ snake-names
	Options
	  --all   Get all the names instead of a random name
    --type  Type of name  [Default: all]  [Values: female, male, all]
    --n     Number of random same names
	Examples
	  $ snake-names
	  Lucy
	  $ snake-names --all --type male
	  Billie
	  Igor
    …
    $ snake-names --n 10
    Billie
    ... x10
`,
  {
    flags: {
      all: {
        type: 'boolean',
        default: false,
      },
      type: {
        type: 'string',
        default: 'all',
      },
      n: {
        type: 'number',
        default: NaN,
      },
    },
  },
);

const { all, type, n } = cli.flags;

if (
  !['female', 'male', 'cute', 'badass', 'famous', 'unique', 'all'].includes(
    type,
  )
) {
  throw new Error(
    `Invalid type provided: '${type}'. Valid types are: 'female', 'male', 'cute', 'badass', 'famous', 'unique', 'all'.`,
  );
}

if (all && n) {
  throw new Error(`Invalid all names flag cannot be specified with numbers`);
}

if (
  !['female', 'male', 'cute', 'badass', 'famous', 'unique'].includes(type) &&
  n
) {
  throw new Error(
    `Invalid type provided: '${type}'. Valid types are: 'all' when specifying numbers`,
  );
}

console.log(
  all
    ? snakeNames[type].join('\n')
    : n
    ? snakeNames['random'](n)
    : snakeNames[type + 'Random'](),
);
