const http = require('http');
const url = require('url');

const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    try {
      const output = await countStudents(databaseFile);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students
${output}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found!');
  }
});

app.listen(1245);
module.exports = app;
