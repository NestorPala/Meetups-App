const mongoose = require("mongoose");


const meetupSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    datetime : {
        type: Date,
        required: true
    },
    place : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    organizer_id : {
        type: String,
        required: true
    },
    invited_people : {
        type: [String],
        required: true
    },
    "checked-in_people" : {
        type: [String],
        required: false
    },
    is_over : {
        type: Boolean,
        required: false
    },
});


module.exports = mongoose.model("Meetup", meetupSchema);