"use strict";

const directives = require("..");
const assert = require("assert").strict;

assert.strictEqual(directives(), "Hello from directives");
console.info("directives tests passed");
