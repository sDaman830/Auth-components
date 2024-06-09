const express = require("express");
const router = express.Router();

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
