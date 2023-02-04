'use strict';

const slot = require('..');
const assert = require('assert').strict;

assert.strictEqual(slot(), 'Hello from slot');
console.info("slot tests passed");
