export function errorMiddleware(err, _req, res, _next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something went wrong';
  console.error('Error occured', err.message, err.stack);
  return res.status(statusCode).json({ message });
}