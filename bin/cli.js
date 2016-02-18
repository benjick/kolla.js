#!/usr/bin/env node
"use strict";

var watcher = require('../dist/kolla.umd.js');

if (!module.parent) {
  var pattern = process.argv[2];
  var command = process.argv[3];

  if (!command) {
    throw 'Need more params';
  }

  try {
    watcher(pattern, command);
  } catch (e) {
    console.log(e);
  }
}
