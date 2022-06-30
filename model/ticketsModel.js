const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
