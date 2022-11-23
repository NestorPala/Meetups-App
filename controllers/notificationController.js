const Notification = require("../models/notification");

exports.getAllNotificationsByUserId = async (req, res, next) => {
    try {
        const notifications = await Notification.find({
            user_id: req.params.user_id
        });
        return res.json(notifications);
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.getNewNotificationsByUserId = async (req, res, next) => {
    let notifications = [];
    try {
        notifications = await Notification.find({ 
            user_id: req.params.user_id,
            seen: false
        });
        return res.json(notifications);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.getNotificationById = async (req, res, next) => {
    return res.json(res.notification);
};

exports.markNotificationAsSeen = async (req, res, next) => {
    await res.notification.update({ seen: true });
    return res.json({ message: "Notification updated successfully!" });
};

exports.checkNotification = async (req, res, next) => {
    let notification;
    try {
        notification = await Notification.findById(req.params.notification_id);
        if (notification == null) {
            return res.status(404).json({ message: "Could not find notification" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.notification = notification;
    next();
}
