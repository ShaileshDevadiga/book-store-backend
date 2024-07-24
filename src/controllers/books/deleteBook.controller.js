import { deleteBookService } from '../../services/books.services.js';

import { RouteError } from '../../utils/routeError.js';

export async function deleteBook(req, res, next) {
  try {
    const { id } = req.params;

    const result = await deleteBookService(id);

    if (!result) {
      throw new RouteError(404, 'Book not found');
    }

    return res.sendStatus(204);
  } catch(error) {
    return next(error);
  }
}