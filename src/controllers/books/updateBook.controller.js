import { updateBookService } from '../../services/books.services.js';
import { RouteError } from '../../utils/routeError.js'
import { validateBook } from './book.validation.js';

export async function updateBook(req, res, next) {
  try {
    const { id } = req.params;
    const { title, author, publishYear, description } = req.body;

    const error = validateBook(req.body);

    if (error) {
      throw new RouteError(400, error.details[0].message);
    }

    const result = await updateBookService(id, title, author, publishYear, description);

    if (!result) {
      throw new RouteError(404, 'Book not found');
    }

    return res.status(200).json({ message: 'Book updated successfully'});
  } catch(error) {
    return next(error);
  }
}