import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

const app = express();

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;

/** routes */
app.use('/api', router);

/** routes */
app.get('/', (req, res) => {
  try {
    res.json('Get Request');
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server is running on http:localhost:${port}`);
});
