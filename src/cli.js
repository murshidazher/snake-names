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
	Examples
	  $ snake-names
	  Lucy
	  $ snake-names --all --type male
	  Billie
	  Igor
	  …
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
    },
  },
);

const { all, type } = cli.flags;

if (!['female', 'male', 'all'].includes(type)) {
  throw new Error(
    `Invalid type provided: '${type}'. Valid types are: 'female', 'male', 'all'.`,
  );
}

console.log(all ? snakeNames[type].join('\n') : snakeNames[type + 'Random']());
