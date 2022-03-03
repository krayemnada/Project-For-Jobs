const Offer = require("../models/offers");
const jwt = require("jsonwebtoken");

//add new offer

exports.offers = async (req, res) => {
    const { title, description, place, date, niveau, typeEmploi } = req.body;
    const newOffer = new Offer({
        title,
        description,
        place,
        date,
        niveau,
        typeEmploi,
    });
    try {
        await newOffer.save();
        res.status(203).json(newOffer);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// get all offers

exports.getoffers = async (req, res) => {
    try {
        const offers = await Offer.find().populate(
            "publisher",
            " fullName  -_id"
        );
        res.send(offers);
    } catch (error) {
        res.status(502).json({ msg: error.message });
    }
};
//get one offer

exports.getOneOffers = async (req, res) => {
    try {
        const oneOffer = await Offer.findById(req.params.id).populate(
            "publisher",
            " fullName  -_id"
        );
        res.send(oneOffer);
    } catch (error) {
        res.send(error.message);
    }
};
//delete one offer

exports.deleteOffers = async (req, res) => {
    try {
        const deleteOffer = await Offer.findByIdAndDelete(req.params.id);
        res.send("bye bye ");
    } catch (error) {
        res.send(error.message);
    }
};
