'use strict';

const tag = require('..');
const assert = require('assert').strict;

assert.strictEqual(tag(), 'Hello from tag');
console.info("tag tests passed");
