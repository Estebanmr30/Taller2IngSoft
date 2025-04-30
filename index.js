import express from 'express';
import path from 'path';
import { infoRouter } from './routes/pokeneas.js';
import { homeRouter } from './routes/home.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', homeRouter);
app.use('/info', infoRouter);

app.listen(port, () => {
  console.log(`Pokeneas app listening on port ${port}`);
});
