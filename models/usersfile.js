const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersfileSchema = new Schema(
    {
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // required: true,
        },
        fullName: {
            type: String,
            // required: true,
        },
        email: {
            type: String,
            // required: true,
        },
        CvFile: {
            type: String,
            // required: true,
        },
        description: {
            type: String,
            // required: true,
        },
        phone: {
            type: String,
            // required: true,
        },
    }
    // { timestamps: true }
);

module.exports = mongoose.model("usersfile", usersfileSchema);
