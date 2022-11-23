const express = require("express");
const router = express.Router();
const {
    checkNotification,
    getNotificationById,
    getAllNotificationsByUserId,
    getNewNotificationsByUserId,
    markNotificationAsSeen
} = require("../controllers/notificationController");


router.get("/get_all/:user_id",
    getAllNotificationsByUserId);

router.get("/get_new/:user_id",
    getNewNotificationsByUserId);

router.get("/get/:notification_id",
    checkNotification, getNotificationById);

router.patch("/mark_as_seen/:notification_id",
    checkNotification, markNotificationAsSeen);


module.exports = router;