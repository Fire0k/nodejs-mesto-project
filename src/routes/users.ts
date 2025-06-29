import { Router } from 'express';

import {
  getAllUsers, getUserById, updateProfile, updateAvatar, getProfile,
} from '../controllers/users';
import { getUserByIdSchema, updateProfileSchema, updateAvatarSchema } from '../middlewares/validators';
import { USER_ROUTES } from '../const';

const usersRouter = Router();

usersRouter.get('/', getAllUsers);
usersRouter.get(USER_ROUTES.BY_ID, getUserByIdSchema);
usersRouter.get(USER_ROUTES.BY_ID, getUserById);

const profileRouter = Router();

profileRouter.patch('/', updateProfileSchema);
profileRouter.patch('/', updateProfile);
profileRouter.patch(USER_ROUTES.AVATAR, updateAvatarSchema);
profileRouter.patch(USER_ROUTES.AVATAR, updateAvatar);
profileRouter.get('/', getProfile);

usersRouter.use(USER_ROUTES.PROFILE, profileRouter);

export default usersRouter;
