import { Router } from 'express';

import usersRouter from './users';
import cardsRouter from './cards';

const router = Router();

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

export { default as authRouter } from './auth';
export default router;
