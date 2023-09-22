import express from 'express';
import app from './routes/index';

const server = express();

server.use('/', app);

server.listen(1245);
