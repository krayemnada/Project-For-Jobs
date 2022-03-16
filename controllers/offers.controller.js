const Offer = require("../models/offers");
const jwt = require("jsonwebtoken");
const path = require("path");
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
        publisher: req.user._id,
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
        const offers = await Offer.find({
            publisher: req.user._id,
        }).populate("publisher", " fullName -_id");

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
            " fullName -_id"
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
//edite offer

exports.editOffer = async (req, res) => {
    try {
        const editOffer = await Offer.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            { new: true }
        );
        res.send(editOffer);
    } catch (error) {
        res.send(error.message);
    }
};

// get all offers to user

exports.getOffersUser = async (req, res) => {
    try {
        const UsersOffers = await Offer.find();

        res.send(UsersOffers);
    } catch (error) {
        res.status(502).json({ msg: error.message });
    }
};

//Offers filter
exports.OffersFilter = async (req, res) => {
    try {
        const filters = req.query.title;
        const filteredOffers = await Offer.find(filters);
        res.send(filteredOffers);
    } catch (error) {
        res.status(505).json({ msg: error.message });
    }
};
// get detail of offer
exports.getDetailOffer = async (req, res) => {
    try {
        const DetailOffer = await Offer.findById(req.params.id);
        res.send(DetailOffer);
    } catch (error) {
        res.send(error.message);
    }
};
//upload file
