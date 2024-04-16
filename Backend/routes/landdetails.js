const express = require("express");
const router = express.Router();
const axios = require('axios');
const LandDetail = require("../models/landdetail");
const Landdetail = require("../models/landdetail");

router.get("/hello", (req, res) => {
    res.send("hello ji");
});

router.post('/landData', async (req, res) => {
    try {
        // console.log(req.body);
        const { name, area, soilType, latitude, longitude } = req.body;
        const apiKey = 'c56764243280de48868405397084450d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        const weatherResponse = await axios.get(apiUrl);
        const weatherData = weatherResponse.data;

        // Store weather data into the database
        const newLandDetail = new LandDetail({
            name,
            area,
            soilType,
            latitude,
            longitude,
            weather: weatherData
        });

        await newLandDetail.save();

        console.log("Weather data saved to the database");

        res.json({ success: true, message: 'Weather data fetched and saved successfully' });
    } catch (error) {
        console.error('Error fetching or saving weather data:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch or save weather data' });
    }
});

router.get('/landData', async (req, res) => {
    try {
      const landDetails = await Landdetail.find().lean(); // Use lean() to get plain JavaScript objects
      res.json(landDetails); // Send the fetched data as JSON
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  });

  

module.exports = router;
