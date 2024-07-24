import Joi from 'joi';

export const bookSchema = Joi.object(
  {
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishYear: Joi.number().required(),
  }
)

export function validateBook(book) {
  const { error } = bookSchema.validate(book);
  return error;
}