'use strict';

const avatar = require('..');
const assert = require('assert').strict;

assert.strictEqual(avatar(), 'Hello from avatar');
console.info("avatar tests passed");
