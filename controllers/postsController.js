
//importo array posts 
const posts = require('../data/posts.js')

//Prendo tutti i post 
const getAllPosts = (req, res) => {
    const tag = req.query.tag;

    let filteredPosts = posts;

   if (tag) {
    filteredPosts = posts.filter(item => {
        return item.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase());
    });

    if (filteredPosts.length === 0) {
        return res.status(404).json({ message: 'Nessun post trovato con il tag indicato' });
    }
}

    res.json(filteredPosts);
};


function store(req, res) {
  console.log(req.body); 
  res.send("Dati ricevuti");
}


// Prendo un post per ID (show)
const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    //Se non trovo il post, da errore 404
    if(!post){
        return res.status(404).json({ message: 'Post non trovato' });
    }

    //Ritorno il post trovato
    res.json(post);
};

const createPost = (req, res) => {
  const { title, content, image, tags } = req.body;

  // Controllo campi obbligatori
  if (!title || !content) {
    return res.status(400).json({ message: "Titolo e contenuto sono obbligatori" });
  }

  // Genera un nuovo ID incrementale
  const nuovoId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

  // Creo il nuovo post
  const nuovoPost = {
    id: nuovoId,
    title,
    content,
    image: image || '',
    tags: tags || []
  };

  // Aggiungo il post all'array
  posts.push(nuovoPost);

  // Log per debug
  console.log('Post aggiunto:', nuovoPost);

  // Rispondo con il post creato e status 201
  res.status(201).json(nuovoPost);
};

//Modifica totale
const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, image, tags } = req.body;

  const index = posts.findIndex(post => post.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post non trovato' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Titolo e contenuto sono obbligatori' });
  }

  const updatedPost = {
    id,
    title,
    content,
    image: image || '',
    tags: tags || []
  };

  posts[index] = updatedPost;

  res.json(updatedPost);
};

//Modifica parziale
const partialUpdatePost = (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
};

//Cancellazione (Destroy)
 const deletePost = (req, res) => {
    const id = parseInt(req.params.id);

    const index = posts.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Post non trovato' });
    }

    posts.splice(index, 1);

    res.status(204).send();
};


//Esporto tutte le funzioni 
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    partialUpdatePost,
    deletePost, 
}