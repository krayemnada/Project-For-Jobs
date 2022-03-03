const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "publisher",
        // required: true,
    },
    title: {
        type: String,
        // required: false,
    },
    description: {
        type: String,
        // required: true,
    },

    place: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    niveau: {
        type: String,
        // required: true,
    },
    typeEmploi: {
        type: String,
        // required: true,
    },
});
module.exports = mongoose.model("offer", offerSchema);
