"use strict";

const tokens = require("..");
const assert = require("assert").strict;

assert.strictEqual(tokens(), "Hello from tokens");
console.info("tokens tests passed");
