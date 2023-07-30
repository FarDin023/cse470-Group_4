const router = require("express").Router();
const userController = require("../controller/UserController");
// const { verifyToken } = require("../middlewares/verifyToken");

router.post("/create/user", userController.register);
router.post("/login", userController.login);

module.exports = router;
