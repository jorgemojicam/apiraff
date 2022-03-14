const { authJwt } = require("../middlewares");
const controller = require("../controllers/carton.controller");
const express = require("express");
const router = express.Router();

router.get("/byUser", [authJwt.verifyToken], controller.get);
router.post("/", [authJwt.verifyToken], controller.createCarton);
router.put("/updateStalls", [authJwt.verifyToken], controller.updateStalls);


module.exports = router;
