const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Card = new Schema({
  deckId: {
    type: String,
    required: true
  },
  question: {
    type: String
  },
  answer: {
    type: String
  }
});

module.exports = mongoose.model("Card", Card);
