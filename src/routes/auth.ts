import { Router } from 'express';

import { login } from '../controllers/auth';
import { createUser } from '../controllers/users';

const authRouter = Router();

authRouter.post('/signin', login);
authRouter.post('/signup', createUser);

export default authRouter;
