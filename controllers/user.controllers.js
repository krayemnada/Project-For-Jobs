const User = require("../models/User");
const publisher = require("../models/publisher");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.signUp = async (req, res) => {
    const {
        fullName,
        email,
        password,
        civility,
        birth,
        image,
        governorate,
        userRole,
    } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(401).json({ msg: "this email is already exist" });
        }
        const newUser = new User({
            fullName,
            email,
            password,
            civility,
            birth,
            image,
            governorate,
            userRole,
        });
        const salt = await bc.genSalt(10);
        const hash = await bc.hashSync(password, salt);
        newUser.password = hash;

        await newUser.save();

        const payload = {
            id: newUser._id,
            fullName: newUser.fullName,
            civility: newUser.civility,
            birth: newUser.birth,
            governorate: newUser.governorate,
            email: newUser.email,
            image: newUser.image,
            userRole: newUser.userRole,
        };
        const token = jwt.sign(payload, secret);

        res.status(200).json({
            token,
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                civility: newUser.civility,
                birth: newUser.birth,
                governorate: newUser.governorate,
                password: newUser.password,
                email: newUser.email,
                image: newUser.image,
                userRole: newUser.userRole,
            },
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const theUser = await User.findOne({ email });
        const thePub = await publisher.findOne({ email });

        if (theUser) {
            const isMatch = await bc.compare(password, theUser.password);
            if (isMatch) {
                // res.status(402).json({ msg: "invalid email or password" });
                const payload = {
                    id: theUser._id,
                    fullName: theUser.fullName,
                    email: theUser.email,
                    civility: theUser.civility,
                    birth: theUser.birth,
                    governorate: theUser.governorate,
                    image: theUser.image,
                    userRole: theUser.userRole,
                };
                const token = jwt.sign(payload, secret);
                res.status(203).json({
                    token,
                    user: {
                        id: theUser._id,
                        fullName: theUser.fullName,
                        civility: theUser.civility,
                        birth: theUser.birth,
                        governorate: theUser.governorate,
                        password: theUser.password,
                        email: theUser.email,
                        image: theUser.image,
                        userRole: theUser.userRole,
                    },
                });
            } else {
                res.status(403).json({ msg: "password or email invalid" });
            }
        } else if (thePub) {
            const isMatch = await bc.compare(password, thePub.password);
            // console.log(isMatch);
            if (isMatch) {
                const payload = {
                    id: thePub._id,
                    fullName: thePub.fullName,
                    website: thePub.website,
                    email: thePub.email,
                    phone: thePub.phone,
                    company: thePub.company,
                    image: thePub.image,
                    governorate: thePub.governorate,
                    userRole: thePub.userRole,
                };
                const token = jwt.sign(payload, secret);
                res.status(203).json({
                    token,
                    publisher: {
                        id: thePub._id,
                        fullName: thePub.fullName,
                        website: thePub.website,
                        phone: thePub.phone,
                        userRole: thePub.userRole,
                        email: thePub.email,
                        company: thePub.company,
                        image: thePub.image,
                        governorate: thePub.governorate,
                    },
                });
            } else {
                res.status(403).json({ msg: "password invalid" });
            }
        } else {
            res.status(402).json({ msg: "invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.getUser = (req, res) => {
    res.send(req.user);
};
//get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(502).json({ msg: error.message });
    }
};
//delete user

exports.deleteUsers = async (req, res) => {
    try {
        const deleteUsers = await User.findByIdAndDelete(req.params.id);
        res.send("bye bye ");
    } catch (error) {
        res.send(error.message);
    }
};
// file user
exports.AddUserFile = async (req, res) => {
    const { userName, userEmail, userFile, phone } = req.body;
    const newUserFile = new User({
        userName,
        userEmail,
        userFile,
        phone,
        // User: req.user._id,
    });
    try {
        await newUserFile.save();
        res.status(213).json(newUserFile);
    } catch (error) {
        res.status(550).json({ msg: error.message });
    }
};
// edit user
exports.EditUser = async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            { new: true }
        );
        res.send(editUser);
    } catch (error) {
        res.send(error.message);
    }
};
