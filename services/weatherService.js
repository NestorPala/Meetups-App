const axios = require("axios");

exports.weather = async () => {
    if (!process.env.WEATHER_API_KEY) {
        return res.status(500).json({ message: "Could not retrieve weather info" });
    }

    let weatherUrl = 'https://weatherbit-v1-mashape.p.rapidapi.com/current';

    // (Agregar funcionalidad de que la ubicacion sea el lugar específico del evento)

    const options = {
        method: 'GET',
        url: weatherUrl,
        params: { lon: '-58.4', lat: '-34.6' },
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    const {data: response} = await axios.request(options);
    return response.data[0].temp;
};
