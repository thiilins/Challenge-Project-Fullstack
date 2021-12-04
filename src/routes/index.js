const express = require("express");
const router = express.Router();
const IndexController = require("../controller/IndexController");
const validateContact = require("../middleware/form-validator");
router.get("/", IndexController.index);
router.post("/", validateContact, IndexController.contact);
module.exports = router;
