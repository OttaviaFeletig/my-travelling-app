const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  avatarPicture: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  oAuth: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: function validate() {
      if (this.oAuth) {
        return false;
      } else {
        return true;
      }
    }
  },
  passwordConfirmation: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },

  favoriteItineraries: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("user", usersSchema);
