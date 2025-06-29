import { celebrate, Joi } from 'celebrate';

export const createCardSchema = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().required().uri(),
  }),
});

export const deleteCardByIdSchema = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
});
