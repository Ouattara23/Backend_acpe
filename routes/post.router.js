const express = require('express');
const { setPosts, getPosts, getPostsById } = require("../controllers/post.controller");
const Message = require('../models/Message'); // Correction du chemin

const router = express.Router();

// Routes pour les posts
router.post("/", setPosts);
router.get("/", getPosts);
router.get("/:id", getPostsById);

// Route pour soumettre un message
router.post('/submit', async (req, res) => {
    try {
        const { nom, email, message } = req.body;

        const newMessage = new Message({ nom, email, message });
        await newMessage.save();

        res.send('Message enregistré avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
        res.status(500).send('Erreur lors de l\'enregistrement.');
    }
});

module.exports = router;
