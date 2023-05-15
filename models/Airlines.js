import mongoose from "mongoose";

const schema = mongoose.Schema({
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
    type: String,
    required: true,
  },
  to: {
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
  no_of_passengers: {
    type: String,
  },
  occupancy: {
    type: String,
  },
  reviews: [
    {
      user_name: mongoose.Schema.Types.ObjectId,
      title: { type: String, required: true },
      description: { type: String, required: true },
      videos: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
      images: {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
      rating: {
        type: String,
        required: true,
      },
    },
  ],
  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Airlines = mongoose.model("Airlines", schema);
