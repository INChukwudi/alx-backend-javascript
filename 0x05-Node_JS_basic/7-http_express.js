const express = require('express');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

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
