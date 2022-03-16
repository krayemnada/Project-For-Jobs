const express = require("express");
const { Addfile } = require("../controllers/File.controller");
const auth = require("../middleware/auth");

router = express.Router();
router.post("/Addfile", Addfile, auth);
module.exports = router;
