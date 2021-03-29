//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/login", (req, res) => {
	res.render("login");
});
app.get("/register", (req, res) => {
	res.render("register");
});
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
