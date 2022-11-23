const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    surname : {
        type: String,
        required: true
    },
    dni : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    telephone : {
        type: String,
        required: true
    },
    is_admin : {
        type: Boolean,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("User", userSchema);