const { check, validationResult } = require("express-validator");

exports.signUpRules = () => [
    check("fullName", "this field is require").notEmpty(),
    check("email", "this should be a valid email").isEmail(),
    check("email", "this field is require").notEmpty(),
    check("password", "password should be more then 5 characters").isLength({
        min: 5,
    }),
];

exports.loginRules = () => [
    check("email", "this field is required").notEmpty(),
    check("email", "this field should be a valid email").isEmail(),
    check("password", "this field is required").notEmpty(),
];

exports.offerRules = () => [
    check("title", "this field is required").notEmpty(),
    check("description", "this field should be a description").notEmpty(),
    check("place", "this field is required").notEmpty(),
    // check("niveau", "this field is required").notEmpty(),
    // check("typeEpmloi", "this field should be a type of job").notEmpty(),
];

exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    return errors.isEmpty()
        ? next()
        : res.status(400).json({ errors: errors.array() });
};
