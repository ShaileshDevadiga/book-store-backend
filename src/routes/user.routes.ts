import { Router, Response } from 'express';

const router = Router();

router.get('/', (_, res: Response): void => {
  const users = ['Goon', 'Tsuki', 'Joe'];
  res.status(200).send(users);
});

export default router;
