import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import router, { authRouter } from './routes';
import {
  parseRequest,
  errorHandler,
  pageNotFoundHandler,
  authHandler,
} from './middlewares';

const app = express();

app.use(parseRequest);
app.use('/', authRouter);
app.use(authHandler);
app.use('/', router);
app.use(errorHandler);
app.use(pageNotFoundHandler);

const { PORT = 3000, MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const connect = () => {
  mongoose.connect(MONGO_URL);
  app.listen(PORT);
};

connect();
