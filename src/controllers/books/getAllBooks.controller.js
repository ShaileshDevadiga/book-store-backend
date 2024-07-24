import { getAllBooksService } from '../../services/books.services.js';

export async function getAllBooks(_, res, next) {
  try {
    const books = await getAllBooksService();
    return res.status(200).json({
      count: books.length,
      data: books
    });
  } catch(error) {
    return next(error);
  }
}