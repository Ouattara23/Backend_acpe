const express = require('express');
const {setPosts, getPosts, getPostsById} = require("../controllers/post.controller");
const router = express.Router();

router.post("/", setPosts);
router.get("/", getPosts);
router.get("/:id", getPostsById);



module.exports = router;