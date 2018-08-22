const express = require("express");
const path = require("path");

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

// set the port
app.set("port", process.env.PORT || 2000);
app.use(controllers);

module.exports = app;
