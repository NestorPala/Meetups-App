const User = require("../models/user");

exports.verifyRegister = async (req, res, next) => {
    try {
        const user = await User.find({
            $or: [
                { email: req.body.email },
                { dni: req.body.dni },
                { telephone: req.body.telephone },
            ]
        });
        if (user.length > 0) {
            return res.status(400).json({ message: "Could not register. User already exists" });
        }
        next();
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};
