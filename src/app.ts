import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import router from './routes';
import {
  parseRequest,
  setUserId,
  errorHandler,
  pageNotFoundHandler,
} from './middlewares';

const app = express();

app.use(parseRequest, setUserId);
app.use('/', router);
app.use(errorHandler);
app.use(pageNotFoundHandler);

const connect = () => {
  mongoose.connect(process.env.MONGO_URL as string);
  app.listen(process.env.PORT);
};

connect();
