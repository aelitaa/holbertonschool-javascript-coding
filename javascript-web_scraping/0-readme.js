#!/usr/bin/node

const fs = require('fs');

const file = process.argv[2];
fs.readFile(file, 'utf-8', function (err, content) {
  if (err) {
    console.log(err);
  } else { console.log(content); }
});
