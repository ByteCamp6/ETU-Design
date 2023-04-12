'use strict';

const row = require('..');
const assert = require('assert').strict;

assert.strictEqual(row(), 'Hello from row');
console.info("row tests passed");
