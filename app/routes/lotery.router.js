const { authJwt } = require("../middlewares");
const controller = require("../controllers/carton.controller");
const express = require("express");
const router = express.Router();

router.get("/", [authJwt.verifyToken], controller.get);
router.post("/", [authJwt.verifyToken], controller.createCarton);
router.put("/", [authJwt.verifyToken], controller.updateStalls);

module.exports = router;
