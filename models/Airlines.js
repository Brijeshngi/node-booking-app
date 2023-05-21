import mongoose from "mongoose";

const schema = new mongoose.Schema({
  airlines: {
    type: String,
    required: true,
  },
  flight_number: {
    type: String,
    required: true,
  },
  timing: {
    type: Date,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  travelling_class: {
    type: String,
    required: true,
  },
  fares: {
    type: String,
    required: true,
  },
  flight_status: {
    type: String,
    enum: ["A", "OTW", "DPT", "L"],
    default: "A",
  },
  occupancy: {
    type: String,
    required: true,
  },
  occupied: {
    type: String,
  },
  seat_detail: {
    type: String,
  },
  reviews: [
    {
      user_name: mongoose.Schema.Types.ObjectId,
      title: { type: String },
      description: { type: String },
      videos: {
        public_id: { type: String },
        url: { type: String },
      },
      images: {
        public_id: { type: String },
        url: { type: String },
      },
      rating: {
        type: String,
      },
      Date: {
        type: Date,
        Date: Date.now(),
      },
    },
  ],
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Airlines = mongoose.model("Airlines", schema);
