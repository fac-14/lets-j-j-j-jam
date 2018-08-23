const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session');
// const MemcachedStore = require("connect-memcached")(session);

// create express app
const app = express();

// get our controllers
const controllers = require("./controllers/index");
const exphbs = require("express-handlebars");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// set up our engine
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

// set the session cookie with secret - should secret be .env var?

app.use(
  session({
    secret: process.env.SECRET,
    // store: new SequelizeStore({ db: sql }),
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
  })
);

// set the port
app.set("port", process.env.PORT || 2000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
