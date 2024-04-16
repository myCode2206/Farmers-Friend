const mongoose = require("mongoose");
const Landdetail =require("./landdetail")
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  land: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Landdetail' 
  }]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
