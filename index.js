import express from 'express';
import { infoRouter } from './routes/pokeneas.js';

const app = express();
const port = 3000;

app.use('/', infoRouter);

app.listen(port, () => {
  console.log(`Pokeneas app listening on port ${port}`);
});
