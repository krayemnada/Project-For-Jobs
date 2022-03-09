const express = require("express");
const {
    offers,
    getoffers,
    getOneOffers,
    deleteOffers,
    editOffer,
    getOneOffer,
    getOffersUser,
} = require("../controllers/offers.controller");

const auth = require("../middleware/auth");
const { offerRules, validator } = require("../middleware/validator");

router = express.Router();

router.post("/PubOffers", offerRules(), validator, auth, offers);
router.get("/getoffers", auth, getoffers);
router.get("/getOffersUser", getOffersUser);
router.get("/getOne/:id", getOneOffers);
router.delete("/delete/:id", deleteOffers);
router.put("/editone/:id", editOffer);
// router.get("/getOneOffer/:id", getOneOffer);

module.exports = router;
