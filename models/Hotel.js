import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Hotel_name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  gallery: [
    {
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
    },
  ],
  Amenities: {
    type: String,
  },
  fares: {
    type: String,
    required: true,
  },
  no_of_rooms: {
    type: String,
    required: true,
  },
  room_type: {
    type: String,
    required: true,
    enum: ["AC", "Non-AC"],
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
    },
  ],

  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Hotel = mongoose.model("Hotel", schema);
