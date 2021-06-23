import 'reflect-metadata';
import './database';
import express from 'express';
import router from './routes';

// https://expressjs.com/pt-br/
const app = express();

app.use(express.json());
app.use(router);

// Listening on localhost:3000
app.listen(3000, () => console.log('Server is running!'));
