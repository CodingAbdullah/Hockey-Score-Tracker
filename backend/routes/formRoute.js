const express = require("express");
const formController = require("../controllers/formController");

const router = express.Router();
router.post("/", formController.formController);

module.exports = router;
