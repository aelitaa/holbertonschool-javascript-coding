#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let count = 0;
request.get(url, (error, response, body) => {
  if (error) console.log(error);
  const movie = JSON.parse(body).results;
  movie.forEach(movie => {
    movie.characters.forEach(characters => {
      if (characters.includes('18')) count += 1;
    });
  });
  console.log(count);
});
