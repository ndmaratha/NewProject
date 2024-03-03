const express = require("express");
const { SignUp, Login, Authinticate } = require("../controllers/userConroller");

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/auth", Authinticate);
module.exports = router;
