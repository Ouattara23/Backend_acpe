const PostModel = require('../models/post.model');

// Obtenir tous les posts
module.exports.getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.render('index', {posts});
    } catch (error) {
        res.status(500).json({ message: "Cesi est une erreur", error });
    }
};

module.exports.getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.render('parent', {posts});
    } catch (error) {
        res.status(500).json({ message: "Cesi est une erreur", error });
    }
};

// Obtenir un post grâce à son ID
module.exports.getPostsById = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        //res.render('article', {post});
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};



//mettre en place un message Ajouter un article
module.exports.setPosts = async(req, res) => {
    //res.json({message: "ça fonstionne !"});

    try{ 
        const{
            nom,
            email,
            telephone,
            enfant,
            ecole,
            motDePasse,
        } = req.body;

        const post = await PostModel.create({
            nom,
            email,
            telephone,
            enfant,
            ecole,
            motDePasse,
        });

        console.log("Post créé avec succès:", post); // Ajout de cette ligne
            res.status(200).json(post);
        } catch (error) {
            console.error("Erreur dans setPosts:", error); // Ajout de cette ligne
            res.status(500).json({ message: "Erreur serveur." });
        }
};
