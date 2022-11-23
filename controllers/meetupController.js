const Meetup = require("../models/meetup");
const Invitation = require("../models/invitation");
const { generateNotification } = require("../services/notificationService");

exports.createMeetup = async (req, res) => {
    try {
        const meetup = new Meetup({
            ...req.body,
            is_over: false
        });
        await meetup.save();

        // Notifico al admin y a todos los invitados por el admin
        [...meetup.invited_people, res.payload.id]
            .forEach(async invited =>
                await generateNotification(
                    invited,
                    `Se ha creado un nuevo evento para el día ${meetup.datetime}`
                ));

        return res.status(201).json({
            message: "Meetup added successfully!",
            meetup_data: meetup
        });
    } catch (requestError) {
        return res.status(400).json({ message: requestError.message });
    }
};

exports.updateMeetup = async (req, res) => {
    if (req.body.invited_people == null) {
        await res.meetup.update({ ...req.body });
        return res.json({ message: "Meetup updated successfully!" });
    }

    req.body.invited_people.forEach(invited => res.meetup.invited_people.push(invited));
    res.meetup.save();
    res.meetup.update({
        name: req.body.name ?? res.meetup.name,
        description: req.body.description ?? res.meetup.description,
        datetime: req.body.datetime ?? res.meetup.datetime,
        place: req.body.place ?? res.meetup.place,
        address: req.body.address ?? res.meetup.address,
        organizer_id: req.body.organizer_id ?? res.meetup.organizer_id
    });

    return res.json({ message: "Meetup updated successfully!" });
};

exports.getMeetup = async (req, res) => {
    return res.json(res.meetup);
};

exports.getAllMeetups = async (req, res) => {
    try {
        const meetups = await Meetup.find();
        return res.json(meetups);
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.getMeetupsByUserId = async (req, res) => {
    try {
        const meetups = await Meetup.find();
        const userMeetups = meetups.filter(m => m.invited_people.includes(res.payload.id));
        return res.json(userMeetups);
    } catch (serverError) {
        return res.status(500).json({ message: serverError.message });
    }
};

exports.deleteMeetup = async (req, res) => {
    await res.meetup.remove();
    return res.json({ message: "Meetup deleted successfully!" });
};

// Checks if a given meetup exists
exports.checkMeetup = async (req, res, next) => {
    let meetup;
    try {
        meetup = await Meetup.findById(req.params.meetup_id);
        if (meetup == null) {
            return res.status(404).json({ message: "Could not find meetup" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.meetup = meetup;
    next();
}

exports.joinMeetup = async (req, res, next) => {
    try {
        const invitation = new Invitation({
            meetup_id: req.params.meetup_id,
            user_id: res.user.id
        });
        await invitation.save();
        res.meetup.invited_people.push(res.user.id);
        await res.meetup.save();
        return res.json({
            message: "Joined the meetup successfully!",
            invitation_code: invitation.id
        });
    } catch (serverError) {
        return res.status(500).json({ message: "Could not join the meetup" })
    }
}

exports.unjoinMeetup = async (req, res, next) => {
    try {
        const invitation = Invitation.findOne({
            meetup_id: req.params.meetup_id,
            user_id: res.payload.id
        });
        if (invitation == null) {
            return res.status(400).json({
                message: "Could not unjoin the meetup. The meetup does not exist"
            });
        }
        await invitation.remove();
        //Removing the user id from invited_people
        res.meetup.invited_people = res.meetup.invited_people.filter(u => u !== res.user.id);
        await res.meetup.save();
        return res.json({ message: "Unjoined the meetup successfully!" });
    } catch (serverError) {
        return res.status(500).json({ message: "Could not unjoin the meetup. Server error" })
    }
}

exports.checkinMeetup = async (req, res, next) => {
    try {
        res.meetup["checked-in_people"].push(res.user.id);
        await res.meetup.save();
        return res.json({ message: "Checked-in at the meeting successfully!" });
    } catch (serverError) {
        return res.status(500).json({ message: "Could not check-in at the meetup" })
    }
}
