const { authJwt } = require("../middlewares");
const controller = require("../controllers/carton.controller");
const express = require("express");
const router = express.Router();


router.get("/:id&:page", [authJwt.verifyToken], controller.get);
router.post("/", [authJwt.verifyToken], controller.createCarton);
router.put("/updateStalls", [authJwt.verifyToken], controller.updateStalls);
router.get("/byUser/:id", [authJwt.verifyToken], controller.getbyUser);
router.get("/byId/:id", [authJwt.verifyToken], controller.getbyId);


module.exports = router;
