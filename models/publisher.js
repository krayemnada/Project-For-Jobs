const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    fullName: String,
    company: String,
    email: String,
    phone: String,
    password: String,
    website: String,
    governorate: String,
    image: String,
    userRole: {
        type: String,
        default: "publisher",
    },
});
module.exports = mongoose.model("publisher", publisherSchema);
