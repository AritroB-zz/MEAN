const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();
const PostController = require("../controllers/posts");


router.post("", checkAuth, extractFile, PostController.createPost);

router.put("/:id", checkAuth, extractFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get('/:id', PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;

