const mongoose = require("mongoose");

const landSchema= new mongoose.Schema({
    area:{
        required:true,
        type:Number
    },
    Soiltype:{
        required:true,
        type:String
    },
    temp:{
        required:true,
        type:String
    },
    lat:{
        required:true,
        type:String
    },
    long:{
        required:true,
        type:String
    },

})


const Landdetail = mongoose.model("Landdetail", landSchema);
module.exports = Landdetail;