const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
