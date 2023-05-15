import mongoose from "mongoose";

const schema = mongoose.Schema({
  user_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  item_type: {
    type: mongoose.Schema.Types.ObjectId,
    // booking id=> booked_items=> fetch information using id=> then write review and submit on item type
  },
  review: [
    {
      review: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        enum: ["1", "2", "3", "4", "5"],
      },
      createdAt: {
        type: Date,
        Date: Date.now(),
      },
    },
  ],
});

export const Review = mongoose.model("Review", schema);
