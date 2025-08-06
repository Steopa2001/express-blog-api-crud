// Middleware per rotte non trovate
module.exports = (req, res, next) => {
  res.status(404).json({ error: 'Rotta non trovata' });
};
