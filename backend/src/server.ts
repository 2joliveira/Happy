import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: true });
});

app.listen(3333, () => {
  console.log('Server runing on port 3333 !!! 😎');
});
