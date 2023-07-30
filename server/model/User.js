const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 25,
    },
    lastname: {
      type: String,
      required: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 25,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userimage: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGpVfYx_2My_b33t7G2ktWheZtmMW6K81jg&usqp=CAU",
    },
    coverimage: {
      type: String,
      default:
        "https://www.sketchappsources.com/resources/source-image/game-icons-rengised.png",
    },
    followers: {
      type: Array,
    },
    following: {
      type: Array,
    },
    notifications: {
      type: Array,
    },
    bio: {
      type: String,
      default: "I am ...",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);