const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Bio = mongoose.model("Bio", bioSchema);

module.exports = Bio;
