import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { UnauthorizedError } from '../helpers';
import userModel from '../models/user';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedError('Неправильные почта или пароль');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedError('Неправильные почта или пароль');
    }

    const token = jwt.sign({ _id: user._id }, 'secret-key', { expiresIn: '7d' });

    res.send({ token });
  } catch (error: any) {
    next(error);
  }
};
