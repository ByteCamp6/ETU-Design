'use strict';

const link = require('..');
const assert = require('assert').strict;

assert.strictEqual(link(), 'Hello from link');
console.info("link tests passed");
