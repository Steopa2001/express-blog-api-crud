// Importo exxpress
const express = require('express');
const router = express.Router();

//importo le funzioni dal controller 
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    partialUpdatePost,
    deletePost,
} = require('../controllers/postsControler.js')

//importo array posts
const posts = require('../data/posts.js');


// GET /posts → restituisce tutti i post in JSON
router.get("/", (req, res) => {
  res.json(posts);
});

// GET /posts/:id → restituisce il singolo post in JSON
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  //ritorno il messaggio "Post non trovato" se inserisco id che non c'è
  if (!post) {
    return res.status(404).json({ message: "Post non trovato" });
  }

  res.json(post);
});

// POST /posts → crea un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// PUT /posts/:id → modifica completa del post
router.put("/:id", (req, res) => {
  res.send(`Modifica completa del post ${req.params.id}`);
});

// PATCH /posts/:id → modifica parziale del post
router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
});

// DELETE /posts/:id → elimina un post
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

//esporto router 
module.exports = router;