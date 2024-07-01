import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/** import connection  */
import connect from './database/connect.js';
import { error } from 'console';

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

/** start server only if we have a valid connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server is running on http:localhost:${port}`);
      });
    } catch (error) {
      console.log('we cannot connected to the server');
    }
  })
  .catch((error) => {
    console.log('Invalid Database Connection');
  });
