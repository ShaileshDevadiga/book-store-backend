import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit :  process.env.DB_CONNECTION_LIMIT,
});

export async function connectDB() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
  }
  catch(e) {
    console.log('could not connect to database');
    process.exit(1);
  }
}