import { getSingleBookService } from '../../services/books.services.js';

import { RouteError } from '../../utils/routeError.js';

export async function getSingleBook(req, res, next) {
  try {
    const { id } = req.params;
    const book = await getSingleBookService(id);

    if (!book) {
      throw new RouteError(404, 'Book not found');
    }
    return res.status(200).json(book);
  } catch(error) {
    return next(error);
  }
}