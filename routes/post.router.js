const express = require('express');
const {setPosts, getPosts, getPostsById} = require("../controllers/post.controller");
const router = express.Router();

router.post("/", setPosts);
router.get("/", getPosts);
router.get("/:id", getPostsById);


const Message = require('./models/Message'); // Adapte selon l'emplacement de ton modèle

router.post('/submit', async (req, res) => {
    try {
        const { nom, email, message } = req.body;

        const newMessage = new Message({ nom, email, message });
        await newMessage.save();

        res.send('Message enregistré avec succès !');
    } catch (error) {
        res.status(500).send('Erreur lors de l\'enregistrement.');
    }
});
module.exports = router;