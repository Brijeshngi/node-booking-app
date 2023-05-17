import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"],
    maxlength: [50, "Exceeded number of characters"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    validate: validator.isEmail,
  },
  contact: {
    type: String,
    minlength: [10, "minimum 10 characters"],
    maxlength: [10, "maximum 10 characters"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Password required"],
  },
  role: {
    type: String,
    enum: ["admin", "user", "owner"],
    default: "user",
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },

  resetPasswordToken: String,
  resetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// for testing on console that generates resetToken

// console.log("password", crypto.randomBytes(20).toString("hex"));

schema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.ResetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.ResetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

export const User = mongoose.model("User", schema);
