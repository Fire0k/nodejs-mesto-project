import { celebrate, Joi } from 'celebrate';

export const createLoginSchema = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().min(2).max(30),
  }),
});
