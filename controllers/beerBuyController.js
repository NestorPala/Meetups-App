const BEER_UNITS_PER_BOX = 6;
const { weather } = require("../services/weatherService");

// Pre: Temperature is in °C
exports.buy = async (req, res) => {
    const invitedPeople = req.body.invited_people ? req.body.invited_people.length : 1;
    const meetupDayTemperature = await weather();

    if (meetupDayTemperature == null) {
        return res.status(400).json({ message: "Could not retrieve weather info" });
    }

    let beersPerPerson = 0;

    if (meetupDayTemperature < 20) {
        beersPerPerson = 0.75;
    } else if (meetupDayTemperature >= 20 && meetupDayTemperature <= 24) {
        beersPerPerson = 1;
    } else {
        beersPerPerson = 2;
    }

    let beerBoxesToBuy = Math.ceil(BEER_UNITS_PER_BOX / (invitedPeople * beersPerPerson));
    return res.json({ beer_boxes_to_buy: beerBoxesToBuy });
};
