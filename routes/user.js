const express = require("express");
const { signUp, login, getUser } = require("../controllers/user.controllers");
const auth = require("../middleware/auth");
const {
    signUpRules,
    validator,
    loginRules,
} = require("../middleware/validator");

router = express.Router();

router.post("/signUp", signUpRules(), validator, signUp);
router.post("/login", loginRules(), login);
router.get("/get", auth, getUser);
module.exports = router;
