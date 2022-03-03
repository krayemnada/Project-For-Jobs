const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Publisher = require("../models/publisher");
const config = require("config");
const secret = config.get("secret");

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, secret);

        const user = await User.findById(decoded.id);
        const publisher = await Publisher.findById(decoded.id);
        if (user) {
            req.user = user;
            next();
        } else if (publisher) {
            req.user = publisher;
            next();
        } else {
            res.status(404).json({ msg: "not authorized" });
        }
    } catch (error) {
        res.status(505).json({ msg: error.message });
    }
};
module.exports = auth;
