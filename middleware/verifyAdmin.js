const User = require("../models/user");

exports.verifyAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(res.payload.id);
        if (user == null) {
            return res.status(403).json({ 
                message: "You have to be an administrator to perform this operation"
            });
        }
        if (user.is_admin === true) {
            next();
        } else {
            return res.status(403).json({
                message: "You have to be an administrator to perform this operation",
            });
        }
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
}
