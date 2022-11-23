const { weather } = require("../services/weatherService");

exports.weather = async (req, res) => {
    const temp = await weather();

    const response = (temp != null)
        ? { temperature: temp }
        : { message: "Could not retrieve weather info" };
    const statusCode = (temp != null) ? 200 : 400;

    return res.status(statusCode).json(response);
};
