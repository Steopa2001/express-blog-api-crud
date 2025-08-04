const posts = require("../data/posts");

//Prendo tutti i post 
const getAllPosts = (req, res) => {
    res.json(posts);
};

// Prendo un post per ID
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

//Creo un nuovo post 
const updatePost = (req, res) => {
    res.send(`Modifica completa del post ${req.params.id}`);
};

//Creo un nuovo post 
const partialUpdatePost = (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
};

//Creo un nuovo post 
const deletePost = (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
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