const mongoose = require("mongoose");


const invitationSchema = new mongoose.Schema({
    meetup_id : {
        type: String,
        required: true
    },
    user_id : {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Invitation", invitationSchema);