
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

//Creo un nuovo post 
const createPost = (req, res) => {
    res.send('Creazione di un nuovo post');
};

//Modifica totale
const updatePost = (req, res) => {
    res.send(`Modifica completa del post ${req.params.id}`);
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