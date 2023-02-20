'use strict';

const form = require('..');
const assert = require('assert').strict;

assert.strictEqual(form(), 'Hello from form');
console.info("form tests passed");
