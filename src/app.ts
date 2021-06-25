import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app: express.Application = express();
const port = 3000;

app.use(morgan('dev'));

const corsOption = {
  origin: '*',
};

app.use(cors(corsOption));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
