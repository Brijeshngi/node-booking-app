import mongoose from "mongoose";

const schema = mongoose.Schema({
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
    type: String,
    required: true,
  },
  gallery: {},
  Amenities: {
    type: String,
    required: true,
  },
  check_in: {
    type: Date,
    Date: Date.now(),
  },
  check_out: {
    type: Date,
    Date: Date.now(),
  },
  fares: {
    type: String,
    required: true,
  },
  no_of_rooms: {
    type: String,
    required: true,
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

  // {photos, text}

  createAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const Hotel = mongoose.model("Hotel", schema);
