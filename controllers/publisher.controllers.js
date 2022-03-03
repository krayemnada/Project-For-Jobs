const publisher = require("../models/publisher");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.signup = async (req, res) => {
    const {
        fullName,
        email,
        password,
        image,
        website,
        phone,
        company,
        governorate,
    } = req.body;
    try {
        const existingpublisher = await publisher.findOne({ email });
        if (existingpublisher) {
            res.status(401).json({ msg: "this email is already exist" });
        } else {
            const newpublisher = new publisher({
                fullName,
                email,
                password,
                image,
                website,
                company,
                phone,
                governorate,
            });
            const salt = await bc.genSalt(10);
            const hash = await bc.hashSync(password, salt);
            newpublisher.password = hash;

            await newpublisher.save();

            const payload = {
                id: newpublisher._id,
                phone: newpublisher.phone,

                website: newpublisher.website,
                fullName: newpublisher.fullName,
                company: newpublisher.company,
                image: newpublisher.image,
                governorate: newpublisher.governorate,
                // email: newpublisher.email,
            };
            const token = jwt.sign(payload, secret);

            res.status(200).json({
                token,
                publisher: {
                    id: newpublisher._id,
                    phone: newpublisher.phone,
                    password: newpublisher.password,
                    website: newpublisher.website,
                    fullName: newpublisher.fullName,
                    company: newpublisher.company,
                    image: newpublisher.image,
                    governorate: newpublisher.governorate,
                    email: newpublisher.email,
                    userRole: newpublisher.userRole,
                },
            });
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
// exports.logIn = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };
exports.getPublisher = (req, res) => {
    res.send(req.user);
};
