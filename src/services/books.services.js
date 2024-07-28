import { Book } from '../models/book.model.js';

export async function getAllBooksService() {
  const books = await Book.find({});
  return books;
}

export async function newBookService(title, description, author, publishYear) {
  const newBook = {
    title,
    description,
    author,
    publishYear,
  };
  const book = await Book.create(newBook);
  return book;
}

export async function getSingleBookService(id) {
  const book = await Book.findById(id);
  return book;
}

export async function updateBookService(
  id,
  title,
  description,
  author,
  publishYear
) {
  const newBook = {
    title,
    description,
    author,
    publishYear,
  };

  const result = await Book.findByIdAndUpdate(id, newBook);
  return result;
}

export async function deleteBookService(id) {
  const result = await Book.findByIdAndDelete(id);
  return result;
}
