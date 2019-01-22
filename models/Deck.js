const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Deck = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("Deck", Deck);
