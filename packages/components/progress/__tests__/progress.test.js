"use strict";

const progress = require("..");
const assert = require("assert").strict;

assert.strictEqual(progress(), "Hello from progress");
console.info("progress tests passed");
