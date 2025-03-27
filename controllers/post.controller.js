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


// Modifier un post
module.exports.editPosts = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }

        const updatedPost = await PostModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.render('editPost', { post: post });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};




//mettre en place un message Ajouter un article
module.exports.setPosts = async(req, res) => {
    //res.json({message: "ça fonstionne !"});

    try{ 
        const{
            nom_ecole,
            logo_ecole,
            adresse_ecole,
            ville_ecole,
            code_postal_ecole,
            nom_enseignant,
            matiere_enseigne,
            niveaux_scolaires,
            email_admin,
            mot_de_passe,
            confirmer_mot_de_passe
        } = req.body;

        const post = await PostModel.create({
            nom_ecole,
            logo_ecole,
            adresse_ecole,
            ville_ecole,
            code_postal_ecole,
            nom_enseignant,
            matiere_enseigne,
            niveaux_scolaires,
            email_admin,
            mot_de_passe,
            confirmer_mot_de_passe
        });

        console.log("Post créé avec succès:", post); // Ajout de cette ligne
            res.status(200).json(post);
        } catch (error) {
            console.error("Erreur dans setPosts:", error); // Ajout de cette ligne
            res.status(500).json({ message: "Erreur serveur." });
        }
};

//remplir le formulaire
//gérer la view de notre formulaire
module.exports.getForm = async(req, res) =>{
    try {
      res.render('form', {});
    } catch (error) {
      res.status(500).json({ message: "Cesi est une erreur", error });
    }
};

