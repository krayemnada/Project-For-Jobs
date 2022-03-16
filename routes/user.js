const express = require("express");
const {
    signUp,
    login,
    getUser,
    getUsers,
    deleteUsers,
    AddUserFile,
    EditUser,
} = require("../controllers/user.controllers");
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
router.get("/getUser", getUsers);
router.post("/AddUser", AddUserFile);
router.put("/editUser/:id", EditUser);

router.delete("/deleteUser/:id", deleteUsers);

module.exports = router;
