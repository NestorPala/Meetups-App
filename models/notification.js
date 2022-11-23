const mongoose = require("mongoose");


const notificationSchema = new mongoose.Schema({
    user_id : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    },
    seen : {
        type: Boolean,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model("Notification", notificationSchema);