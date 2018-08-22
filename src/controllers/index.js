const express = require("express");
const router = express.Router();

const home = require("./home");
const topics = require("./topics");
const articles = require("./articles");
const addArticle = require("./add-article");

// create route handler
router.get("/", home.get);
router.get("/topics", topics.get);
router.get("/topics/articles", articles.get);
router.get("/add-article", addArticle.get);

module.exports = router;
