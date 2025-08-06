// Middleware per errori interni del server
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Errore del server' });
};