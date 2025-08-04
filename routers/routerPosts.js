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


// GET /posts  restituisce tutti i post in JSON
router.get("/", (req, res) => {
  res.json(posts);
});

// GET /posts/:id  restituisce il singolo post in JSON
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  //ritorno il messaggio "Post non trovato" se inserisco id che non c'è
  if (!post) {
    return res.status(404).json({ message: "Post non trovato" });
  }

  res.json(post);
});

// Uso le funzioni dal controller direttamente nelle rotte

// GET /posts
router.get("/", getAllPosts);

// GET /posts/:id
router.get("/:id", getPostById);

// POST /posts
router.post("/", createPost);

// PUT /posts/:id
router.put("/:id", updatePost);

// PATCH /posts/:id
router.patch("/:id", partialUpdatePost);

// DELETE /posts/:id
router.delete("/:id", deletePost);

module.exports = router;

//esporto router 
module.exports = router;