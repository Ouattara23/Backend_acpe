const express = require('express');
const { setPosts, getPosts, getPostsById, editPosts, getForm} = require("../controllers/post.controller");
const router = express.Router();

// Routes pour les posts
router.post("/", setPosts);
router.get("/", getPosts);
router.get('/form', getForm);
router.get("/:id", getPostsById);
router.put('/:id', editPosts);

module.exports = router;
