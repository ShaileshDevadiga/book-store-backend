export function notFoundMiddleware(_, res) {
  console.log('route not found');
  return res.status(404).json({ message: 'route not found' });
}