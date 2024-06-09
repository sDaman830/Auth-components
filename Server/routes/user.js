const express = require("express");
const { handleUserSignup } = require("../controllers/user");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Home");
});

router.get("/login", (req, res) => {
  res.send("Login Page");
});

router.get("/signup", (req, res) => {
  res.send("Signup Page");
});

module.exports = router;
