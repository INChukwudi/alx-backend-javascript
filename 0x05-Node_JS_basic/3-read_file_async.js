const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(Boolean);
      const fieldCounts = {};

      for (const line of lines) {
        const [, , , field] = line.split(',');
        if (field !== 'field') {
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
          } else {
            fieldCounts[field] = 1;
          }
        }
      }

      let retVal = `Number of students: ${lines.length - 1}`;
      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in fieldCounts) {
        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
          const count = fieldCounts[field];
          const students = lines
            .filter((line) => line.endsWith(field))
            .map((line) => line.split(',')[0]);

          retVal += `\nNumber of students in ${field}: ${count}. List: ${students.join(', ')}`;
          console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
        }
      }

      resolve(retVal);
    });
  });
}

module.exports = countStudents;
