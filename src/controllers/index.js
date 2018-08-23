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
router.get("/topic", topic.get);
router.get("/topic/:topic", topic.get);
router.get("/topic/article/:id", article.get);
router.get("/add-article", requiresLogin, addArticle.get);
router.get("/sign-up", signUp.get);
router.get("/log-in", logIn.get);
router.post("/add-article/new", (req, res) => {
  // console.log('req: ', req.body)
  queries.addArticle(req.body);
  res.redirect(302, "/");
  res.end();
});
router.post("/add-user", (req, res) => {
  queries.addUser(req.body);
  res.redirect(302, "/log-in");
});
router.post("/login-check", (req, res) => {
  queries
    .doesUserExist(req.body)
    .then(resolve => {
      if (resolve) {
        // if password valid, set session to logged in and redirect
        req.session.loggedIn = true;
        res.redirect(302, "/");
      } else {
        res.redirect(302, "/log-in");
      }
    })
    .catch(e => console.log(e));
});
router.get("/log-out", (req, res) => {
  req.session.loggedIn = false;
  res.redirect(302, "/");
});

function requiresLogin(req, res, next) {
  // console.log(req.session)
  // console.log('Max Age:', req.session.cookie.maxAge)
  if (!req.session.loggedIn) {
    res.redirect(302, "/log-in");
  } else {
    next();
  }
}

function logSessionCookie(req, res, next) {
  // console.log(req.session);
  // console.log('Max Age:', req.session.cookie.maxAge);
  next();
}

module.exports = router;
