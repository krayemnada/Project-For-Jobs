const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: String,
    civility: String,
    password: String,
    birth: String,
    governorate: String,
    image: String,
    userRole: {
        type: String,
        default: "User",
        roles: ["User", "Admin"],
    },
});

module.exports = mongoose.model("User", userSchema);
