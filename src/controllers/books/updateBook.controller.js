import { updateBookService } from '../../services/books.services.js';

import { RouteError } from '../../utils/routeError.js';

export async function updateBook(req, res, next) {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      throw new RouteError(400, 'end all required fields, title, author, publishYear');
    }

    const result = await updateBookService(id, title, author, publishYear);

    if (!result) {
      throw new RouteError(404, 'Book not found');
    }

    return res.status(200).json({ message: 'Book updated successfully'});
  } catch(error) {
    return next(error);
  }
}