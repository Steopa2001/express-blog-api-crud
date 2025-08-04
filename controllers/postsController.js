
//importo array posts 
const posts = require('../data/posts.js')

//Prendo tutti i post 
const getAllPosts = (req, res) => {
    const{ tag } = req.query;

    if(tag) {
        //Filtro i post che hanno il tag indicato 
        const filteredPosts = posts.filter(post => {
            return post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        });
        return res.json(filteredPosts);
    }

    res.json(posts);
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
    return res.status(404).json({ message: 'Post non trovato'})
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