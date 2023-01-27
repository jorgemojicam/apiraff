const { verifySignUp } = require("../middlewares");
const express = require('express');
const router = express.Router();
const controller = require("../controllers/auth.controller");

const validateSignUp = [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted]

router.post("/signup", validateSignUp, controller.signup);
router.post("/signin", controller.signin);

module.exports = router;