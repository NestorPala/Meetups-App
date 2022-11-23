const Notification = require("../models/notification");

exports.generateNotification = async (user_id, message) => {
    const notification = new Notification({
        user_id: user_id,
        message: message,
        seen: false
    });
    try {
        await notification.save(); return true;
    } catch (error) { return false; }
};