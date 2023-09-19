const http = require('http');
const url = require('url');

const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node 5-http.js <database_file>');
  process.exit(1);
}
const databaseFile = args[0];

const app = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    countStudents(databaseFile)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found!');
  }
});

app.listen(1245);
module.exports = app;
