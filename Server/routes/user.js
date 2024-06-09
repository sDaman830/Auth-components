const express = require("express");
const { handleUserSignup, handelUserLogin } = require("../controllers/user");
const router = express.Router();

router.post("/", handleUserSignup);

router.post("/login", handelUserLogin);

router.get("/signup", (req, res) => {
  res.send("Signup Page");
});

module.exports = router;
