const express = require("express");
const router = express.Router();
const templeController = require("../controllers/temples");

router.get("/", templeController.getAllTemples);
router.get("/:id", templeController.getSingleTemple);

module.exports = router;
