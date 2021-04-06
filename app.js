//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocalMogoose = require("passport-local-mognoose");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		secret: "Our little secret.",
		resave: false,
		saveUninitialized: false,
	})
);

mongoose.connect("mongodb://localhost:27017/userDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
	email: String,
	password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/login", (req, res) => {
	res.render("login");
});
app.get("/register", (req, res) => {
	res.render("register");
});

app.post("/register", (req, res) => {});
app.post("/login", (req, res) => {});
app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
