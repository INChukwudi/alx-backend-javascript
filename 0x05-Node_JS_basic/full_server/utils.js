import * as fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const fileLines = data.split('\n').filter(Boolean);
      const fieldObj = {};

      for (const line of fileLines) {
        const [firstName, , , field] = line.split(',');
        if (field !== 'field' && firstName) {
          if (!fieldObj[field]) {
            fieldObj[field] = [];
          }
          fieldObj[field].push(firstName);
        }
      }

      resolve(fieldObj);
    });
  });
}

export default readDatabase;
