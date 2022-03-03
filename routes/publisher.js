const express = require("express");
const {
    signup,

    getPublisher,
} = require("../controllers/publisher.controllers");
const { login } = require("../controllers/user.controllers");
const auth = require("../middleware/auth");
const {
    signUpRules,
    validator,
    loginRules,
} = require("../middleware/validator");

router = express.Router();

router.post("/signup", signUpRules(), validator, signup);
router.post("/login", loginRules(), login);
router.get("/get", auth, getPublisher);
module.exports = router;
