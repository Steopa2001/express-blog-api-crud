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
}