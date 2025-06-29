import { Router } from 'express';

import {
  getAllUsers, getUserById, updateProfile, updateAvatar, getProfile,
} from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:userId', getUserById);

const profileRouter = Router();

profileRouter.patch('/', updateProfile);
profileRouter.patch('/avatar', updateAvatar);
profileRouter.get('/', getProfile);

usersRouter.use('/me', profileRouter);

export default usersRouter;
