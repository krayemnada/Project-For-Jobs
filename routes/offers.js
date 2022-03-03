const express = require("express");
const {
    offers,
    getoffers,
    getOneOffers,
    deleteOffers,
} = require("../controllers/offers.controller");

const auth = require("../middleware/auth");
const { offerRules, validator } = require("../middleware/validator");

router = express.Router();

router.post("/PubOffers", offerRules(), validator, offers);
router.get("/getoffers", getoffers);
router.get("/getOne/:id", getOneOffers);
router.delete("/delete/:id", deleteOffers);

module.exports = router;
