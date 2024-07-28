import express, { Application, Request, Response } from 'express';

import userRoutes from './routes/user.routes';

const app: Application = express();

app.use('/users', userRoutes);

app.use('/', (req: Request, res: Response): void => {
  res.json({ message: 'Allo! Catch-all route.' });
});

export { app };
