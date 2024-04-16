const express = require("express");
const router = express.Router();

const landdetail =require("../models/landdetail")


router.get('/landdetails',(req,res)=>{
    try{
        const data = req.body();
        const {name,area,soilType,latitude,longitude} =req.body;
        console.log(data);
        const apiKey = 'c56764243280de48868405397084450d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        const wetherdata = axios.get(apiUrl)
                .then(res => {
                    console.log(res)
                })
                .catch(error => {
                    console.error('Error fetching forecast weather data:', error);
                });

    }
    catch(e)
    {
        console.log("error aa rha hai bhai");
        console.log(e);
    }
})

