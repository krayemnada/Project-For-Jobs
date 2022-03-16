const usersfile = require("../models/usersfile");

exports.Addfile = async (req, res) => {
    const { fullName, description, file, phone, email } = req.body;
    const newFile = new usersfile({
        fullName,
        description,
        file,
        phone,
        email,
        // User: req.user._id,
    });
    try {
        await newFile.save();
        res.status(203).json(newFile);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
