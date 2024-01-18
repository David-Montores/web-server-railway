require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function (req, res) {
  res.render("home", { titulo: "Curso Node", nombre: "David Montores" });
});

app.get("/generic", function (req, res) {
  res.render("generic", { titulo: "Curso Node", nombre: "David Montores" });
});

app.get("/elements", function (req, res) {
  res.render("elements", { titulo: "Curso Node", nombre: "David Montores" });
});

app.get("*", function (req, res) {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Aplicacion corriendo en el puerto: ${port}`);
});
