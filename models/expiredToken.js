const mongoose = require("mongoose");

const expiredTokenSchema = new mongoose.Schema({
    token : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ExpiredToken", expiredTokenSchema);