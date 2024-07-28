import express from 'express';
import cors from 'cors';

import { connectDB } from './src/configs/db.js';
import { v1Routes } from './src/routes/index.js';
import { errorMiddleware } from './src/middlewares/error.middleware.js';
import { notFoundMiddleware } from './src/middlewares/notFound.middleware.js';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

connectDB();

app.use('/api/v1', v1Routes);

app.use(errorMiddleware);

app.use(notFoundMiddleware);

app.listen(5500, () => {
  console.log(`Application is running at ${5500}`);
});
