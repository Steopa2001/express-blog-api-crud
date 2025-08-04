const posts = require("../data/posts");

//Prendo tutti i post 
const getAllPosts = (req, res) => {
    res.json(posts);
};

//