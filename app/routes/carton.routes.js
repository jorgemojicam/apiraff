const { authJwt } = require("../middlewares");
const controller = require("../controllers/carton.controller");
const express = require("express");
const router = express.Router();

router.post("/", [authJwt.verifyToken], controller.createCarton);


module.exports = router;
