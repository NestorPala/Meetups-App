const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ExpiredToken = require("../models/expiredToken");

exports.verifyToken = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (header == null) {
            return res.status(403).json({ message: "Could not authenticate. No token provided" });
        }   
        const token = header.split(' ')[1];
        if (token == null) {
            return res.status(403).json({ message: "Could not authenticate. No token provided" });
        }
        const secret = process.env.JWT_SECRET_KEY;
        if (secret == null) {
            return res.status(500).json({ message: "Could not authenticate. Server error" })
        }
        jwt.verify(token, secret, async (error, decoded) => {
            if (error) {
                return res.status(403).json({ 
                    message: "Could not authenticate. Invalid token", 
                    error: error 
                });
            }
            const user = await User.findById(decoded.id);
            if (user == null) {
                return res.status(403).json({ 
                    message: "Could not authenticate. Invalid token",
                    error: error 
                });
            }
            // If the user still has a token
            const expiredToken = await ExpiredToken.findOne({ token: token });
            if (expiredToken != null) {
                return res.status(401).json({ 
                    message: "Could not authenticate. Expired token",
                });
            }
            res.payload = decoded;
            res.token = token;
            next();
        });
    } catch (serverError) {
        return res.status(500).json({ message: serverError });
    }
};
