const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ExpiredToken = require("../models/expiredToken");

exports.register = async (req, res, next) => {
    try {
        try {
            const user = new User({
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10)
            });
            await user.save();
            return res.status(201).json({ message: "User registered successfully!" });
        } catch (requestError) {
            return res.status(400).json({ message: requestError.message });
        }
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (user == null) {
            return res.status(404).json({ message: "Could not login. Invalid email or password" });
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Could not login. Invalid email or password" });
        }
        await user.save();
        const payload = { id: user.id };
        const secret = process.env.JWT_SECRET_KEY;
        const options = { expiresIn: "24h" };
        const token = jwt.sign(payload, secret, options);
        req.headers.authorization = "Bearer " + token;
        return res.status(200).json({ message: "Logged-in successfully! Welcome!", token: token });
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.logout = async (req, res, next) => {
    try {
        const user = await User.findById(res.payload.id);
        if (user == null) {
            return res.status(400).json("Could not log-out. User does not exist");
        }
        const expiredToken = new ExpiredToken({ token: res.token });
        expiredToken.save();
        await user.save();
        return res.status(200).json({ message: "Logged-out successfully! Bye!" });
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
}
