import { newBookService } from '../../services/books.services.js';
import { RouteError } from '../../utils/routeError.js'
import { validateBook } from './book.validation.js';

export async function createBook(req, res, next) {
  try {
    const { title, author, publishYear, description } = req.body;

    const error = validateBook(req.body);

    if (error) {
      throw new RouteError(400, error.details[0].message);
    }

    const book = await newBookService(title, author, publishYear, description);

    return res.status(201).json(book);
  } catch (error) {
    return next(error);
  }
}