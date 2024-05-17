#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
request.get(url, (error, response, body) => {
  if (error) console.log(error);
  const data = JSON.parse(body);
  const todoList = {};
  data.forEach(todo => {
    if (todo.completed) {
      if (todoList[todo.userId]) {
        todoList[todo.userId]++;
      } else {
        todoList[todo.userId] = 1;
      }
    }
  });
  console.log(todoList);
});
