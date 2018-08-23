const express = require("express");
const router = express.Router();

const home = require("./home");
const topic = require("./topic");
const article = require("./article");
const addArticle = require("./add-article");
const signUp = require("./sign-up");
const logIn = require("./log-in");

const queries = require("../model/index");

// create route handler
router.get("/", home.get);
router.get("/topic/:topic", topic.get);
router.get("/topic/article", article.get);
router.get("/add-article", addArticle.get);
router.get("/sign-up", signUp.get);
router.get("/log-in", logIn.get);
router.post("/add-article/new", (req, res) => {
  res.redirect(302, '/');
  res.end();
});
router.post("/add-user", (req, res) => {
  queries.addUser(req.body);
  res.redirect(302, "/log-in");
});
router.post('/login-check', (req, res) => {
  queries.doesUserExist(req.body)
    .then(resolve => {
      if (resolve) {
        res.redirect(302, "/");
      } else {
        res.redirect(302, "/log-in");
      }
    })
    .catch(e => console.log(e));
})

module.exports = router;
