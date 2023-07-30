const router = require("express").Router();
postController = require("../controller/PostController");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.get("/get/post/:id", postController.getPost);
router.get("/get/post/byid/:id", postController.getPostById);
router.post("/create/post", verifyToken, postController.createPost);


module.exports = router;
