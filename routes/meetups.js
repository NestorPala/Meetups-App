const express = require("express");
const router = express.Router();
const {
    createMeetup,
    getAllMeetups,
    checkMeetup,
    getMeetup,
    updateMeetup,
    deleteMeetup,
    joinMeetup,
    unjoinMeetup,
    checkinMeetup,
    getMeetupsByUserId
} = require("../controllers/meetupController");
const { checkUserByFullName } = require("../controllers/userController");
const { buy } = require("../controllers/beerBuyController");
const { weather } = require("../controllers/weatherController");
const { verifyAdmin } = require("../middleware/verifyAdmin");


// Meetup CRUD

router.post("/create",
    verifyAdmin, createMeetup);

router.get("/",
    verifyAdmin, getAllMeetups);

router.get("/get/:meetup_id",
    checkMeetup, getMeetup);

router.get("/get_by_user/",
    getMeetupsByUserId);

router.patch("/update/:meetup_id",
    verifyAdmin, checkMeetup, updateMeetup);

router.delete("/delete/:meetup_id",
    verifyAdmin, checkMeetup, deleteMeetup);


// Meetup use case
router.get("/buy_beers", buy);
router.get("/weather", weather);

router.post("/join/:meetup_id",
    verifyAdmin, checkMeetup, checkUserByFullName, joinMeetup);

router.post("/unjoin/:meetup_id",
    verifyAdmin, checkMeetup, checkUserByFullName, unjoinMeetup);

router.post("/checkin/:meetup_id",
    verifyAdmin, checkMeetup, checkUserByFullName, checkinMeetup);


module.exports = router;