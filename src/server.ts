import express from 'express';

// https://expressjs.com/pt-br/
const app = express();

app.get('/test', (req, res) => {
  return res.send('Hello World!');
});

app.post('/test-post', (req, res) => {
  return res.send('Hello World, POST successful!');
});

// Listening on localhost:3000
app.listen(3000, () => console.log('Server is running!'));
