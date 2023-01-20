'use strict';

const breadcrumb = require('..');
const assert = require('assert').strict;

assert.strictEqual(breadcrumb(), 'Hello from breadcrumb');
console.info("breadcrumb tests passed");
