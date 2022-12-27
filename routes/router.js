const express = require("express");
const router = express.Router();
const sampleController = require("../controller/sampleControllers");

const foodsController = require("../controller/foodscontroller");

// belajar router
router.get("/", sampleController.methodGet);
router.post("/", sampleController.methodPost);
router.put("/", sampleController.methodPut);
router.delete("/", sampleController.methodDelete);

// foods-api
router.post("/foods", foodsController.methodPost);
router.get("/foods", foodsController.methodGet);
router.get("/foods/:id", foodsController.methodGetId);
router.put("/foods/:id", foodsController.methodPut);
router.delete("/foods/:id", foodsController.methodDelete);
module.exports = router;
