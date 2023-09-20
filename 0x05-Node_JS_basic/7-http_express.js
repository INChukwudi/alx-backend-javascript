const express = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node 7-http_express.js <database_file>');
  process.exit(1);
}
const databaseFile = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port);

module.exports = app;
