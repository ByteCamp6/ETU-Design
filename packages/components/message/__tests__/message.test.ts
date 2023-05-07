"use strict";

const message = require("..");
const assert = require("assert").strict;

assert.strictEqual(message(), "Hello from message");
console.info("message tests passed");
