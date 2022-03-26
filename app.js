//Import & declare express
const express = require("express");

const hbs = require("hbs");
const app = express();
app.use(express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Handling functions
app.get("/", (request, response) => {
  response.render("home");
});

app.get("/home", (request, response) => {
  response.render("home");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/works", (request, response) => {
  response.render("works");
});

app.listen(3000);
