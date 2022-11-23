const User = require("../models/user");


exports.updateUser = async (req, res) => {
    await res.user.update({...req.body});
    return res.json({ message: "User updated successfully!" });
};

exports.getUser = async (req, res) => {
    return res.json(res.user);
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.deleteUser = async (req, res) => {
    await res.user.remove();
    return res.json({ message: "User deleted successfully!" });
};

// Checks if a given user exists
exports.checkUser = async (req, res, next) => {
    let user;
    try {
        user = await User.findById(req.params.user_id);
        if (user == null) {
            return res.status(404).json({ message: "Could not find user" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}

exports.checkUserByFullName = async (req, res, next) => {
    let user;
    try {
        user = await User.findOne(req.body);
        if (user == null) {
            return res.status(404).json({ message: "Could not find user or data is incorrect" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}
