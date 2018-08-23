const express = require("express");
const router = express.Router();

const home = require("./home");
const topic = require("./topic");
const article = require("./article");
const addArticle = require("./add-article");
const signUp = require("./sign-up");
const logIn = require("./log-in");

// create route handler
router.get("/", home.get);
router.get("/topic", topic.get);
router.get("/topic/article", article.get);
router.get("/add-article", addArticle.get);
router.get("/sign-up", signUp.get);
router.get("/log-in", logIn.get);
router.post("/add-article/new", (req, res) => {
  res.writeHead(302, { location: "/" });
  res.end();
});

module.exports = router;
