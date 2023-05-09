import mongoose from "mongoose";

const schema = mongoose.Schema({
  airlines: {
    type: String,
  },
  flight_number: {
    type: String,
  },
  timing: {
    type: Date,
    Date: Date.now(),
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  fares: {
    type: String,
  },
  flight_status: {
    type: String,
    enum: ["arrived", "on the way", "departed", "late"],
  },
  no_of_passengers: {
    type: String,
  },
  no_of_seats: {
    type: String,
    enum: ["occupied", "vacant"],
  },
  reviews: {
    type: String,
  },
  rating: {
    type: String,
  },
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Airport = mongoose.model("Airport", schema);
