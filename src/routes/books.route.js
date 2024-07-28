import { Router } from 'express';

import {
  getAllBooks,
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
} from '../controllers/books/index.js';

const router = Router();

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/:id', getSingleBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export { router as bookRoutes };
