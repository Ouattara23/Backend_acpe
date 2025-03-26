const express = require('express');
const {setPosts, getPosts, getPostsById} = require("../controllers/post.controller");
const bcrypt = require('bcryptjs');
const sendWelcomeEmail = require('./mailer');
const router = express.Router();

router.post("/", setPosts);
router.get("/", getPosts);
router.get("/:id", getPostsById);


//inscription
router.post('/inscription-ecole', async (req, res) => {
    try {
        const { nom_ecole, email_admin, nom_enseignant, email_enseignant, matiere_enseignee, mot_de_passe } = req.body;

        // Hasher le mot de passe avant de le stocker
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

        // Ici tu ajoutes la logique pour enregistrer les infos en base de données (MongoDB, MySQL...)
        // Exemple fictif :
        // await Ecole.create({ nom_ecole, email_admin, enseignants: [{ nom: nom_enseignant, email: email_enseignant, matiere: matiere_enseignee, password: hashedPassword }] });

        // Envoyer l'email avec les accès
        await sendWelcomeEmail(email_enseignant, nom_enseignant, mot_de_passe);

        res.status(201).json({ message: "École enregistrée et email envoyé !" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'inscription", error });
    }
});

module.exports = router;