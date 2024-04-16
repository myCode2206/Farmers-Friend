const mongoose = require("mongoose");

const landSchema= new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    area:{
        required:true,
        type:String
    },
    soilType:{
        required:true,
        type:String
    },
    latitude:{
        required:true,
        type:String
    },
    longitude:{
        required:true,
        type:String
    },
    weather: { type: Object } // Store weather data as an object

})


const Landdetail = mongoose.model("Landdetail", landSchema);
module.exports = Landdetail;