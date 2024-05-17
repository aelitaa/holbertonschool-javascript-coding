#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const file = process.argv[3];
request.get(url, (error, response, body) => {
  if (error) console.log(error);
  fs.writeFile(file, body, 'utf-8', () => {});
});
