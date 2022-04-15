// menu navegacion
// footer abajo
// bootstrap

//Import & declare express
const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static("public"));

// Express: use HBS as rendering
app.set("view engine", "hbs");

// Location of the partials
hbs.registerPartials(__dirname + "/views/partials");

app.locals.pageTitle = "PS management";

//Handling functions
app.get(["/", "/home"], (request, response) => {
  response.render("home", { message: "Welcome to this website" });
});

app.get("/about", (request, response) => {
  response.render("about", { message: "About message" });
});

app.get("/works", (request, response) => {
  response.render("works", { message: "Whatever" });
});

app.listen(3000, () => "listening on port 3000");
