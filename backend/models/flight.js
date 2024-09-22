const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    estimatedLandingTime: Date,
    flightDirection: String,
    flightName: String,
    flightNumber: Number,
    prefixIATA: String,
    prefixICAO: String,
    airlineCode: Number,
    route: {
      destinations: [String],
    },
    scheduleDateTime: Date,
  },
  {
    timestamps: true, //bu, createdAt ve updatedAt'yi otomatik olarak yakalar
  }
);

const Flight = mongoose.model("flights", FlightSchema);
module.exports = Flight;
