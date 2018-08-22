const express = require("express");
const router = express.Router();

const home = require("./home");

// create route handler
router.get("/", home.get);

module.exports = router;
