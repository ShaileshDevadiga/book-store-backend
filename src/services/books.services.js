import { pool } from '../configs/db.js';

export async function getAllBooksService() {
  const query = 'SELECT * FROM books';

  const connection = await pool.getConnection();
  const [result] = await connection.execute(query)
  connection.release();
  return result;
}

export async function newBookService(title, author, publishYear, description) {
  const query = 'INSERT INTO `books` (title, author, publishYear, description) VALUES (?, ?, ?, ?)';
  const values = [title, author, publishYear, description];

  const connection = await pool.getConnection();
  const [result] = await connection.execute(query, values);

  connection.release();
  return {
    id: result.insertId,
    title,
    author,
    publishYear,
    description
  };
}

export async function getSingleBookService(id) {
  const query = 'SELECT * FROM books WHERE `id` = ? LIMIT 1';
  const values = [id];

  const connection = await pool.getConnection();
  const [result] = await connection.execute(query, values);

  connection.release();

  return result;
}

export async function updateBookService(id, title, author, publishYear, description) {
  const query = 'UPDATE `books` SET `title` = ?,  `author` = ?, `publishYear` = ?, `description` = ? WHERE `id` = ? LIMIT 1';
  const values = [title, author, publishYear, description, id];

  const connection = await pool.getConnection();
  await connection.execute(query, values);

  connection.release();

  return true;
}

export async function deleteBookService(id) {
  const query = 'DELETE FROM books WHERE `id` = ? LIMIT 1';
  const values = [id];

  const connection = await pool.getConnection();
  await connection.execute(query, values);

  connection.release();
  return true;
}