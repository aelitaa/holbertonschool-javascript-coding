const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, dataDb) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      if (!dataDb) {
        reject(new Error('Database is empty or improperly formatted'));
        return;
      }

      const inFields = {};
      const data = dataDb.trim().split('\n');

      if (data.length < 2) { // assuming there's at least one line for headers and one data line
        reject(new Error('Database is empty or improperly formatted'));
        return;
      }

      console.log(`Number of students: ${data.length - 1}`);

      for (let i = 1; i < data.length; i += 1) {
        const line = data[i].split(',');
        if (line.length < 4) { // assuming there should be at least 4 fields
          reject(new Error('Database is improperly formatted'));
          return;
        }
        if (inFields[line[3]]) {
          inFields[line[3]].counter += 1;
          inFields[line[3]].students.push(` ${line[0]}`);
        } else {
          inFields[line[3]] = { counter: 1, students: [`${line[0]}`] };
        }
      }

      for (const key in inFields) {
        if (Object.prototype.hasOwnProperty.call(inFields, key)) {
          console.log(`Number of students in ${key}: ${inFields[key].counter}. List: ${inFields[key].students}`);
        }
      }

      resolve({ inFields, counter: data.length - 1 });
    });
  });
}

module.exports = readDatabase;

