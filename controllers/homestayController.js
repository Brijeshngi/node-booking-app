import "express-async-errors";
import { Homestay } from "../models/Homestay.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addHomestay = async (req, res, next) => {
  const {
    Property_name,
    about,
    contact,
    city,
    Amenities,
    travelling_for,
    fares,
  } = req.body;

  if (
    !Property_name ||
    !about ||
    !contact ||
    !city ||
    !Amenities ||
    !travelling_for ||
    !fares
  )
    return next(new ErrorHandler("please provide all details", 400));

  const data = await Homestay.create({
    Property_name,
    about,
    contact,
    city,
    Amenities,
    travelling_for,
    fares,
  });

  res.status(201).json({
    success: true,
    message: `homestay added`,
  });
};

export const editHomestay = async (req, res, next) => {
  const { id } = req.params;

  const data = await Homestay.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const {
    Property_name,
    about,
    contact,
    city,
    Amenities,
    travelling_for,
    fares,
  } = req.body;

  if (
    !Property_name ||
    !about ||
    !contact ||
    !city ||
    !Amenities ||
    !travelling_for ||
    !fares
  )
    return next(new ErrorHandler("please provide all details", 400));

  data.Property_name = Property_name;
  data.about = about;
  data.contact = contact;
  data.city = city;
  data.Amenities = Amenities;
  data.travelling_for = travelling_for;
  data.fares = fares;

  await data.save();

  res.status(200).json({
    success: true,
    message: `updated`,
  });
};

export const addReview = async (req, res, next) => {
  const { id } = req.params;

  const data = await Homestay.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { user_name, title, description, videos, images, rating } = req.body;

  data.reviews.user_name = user_name;
  data.reviews.title = title;
  data.reviews.description = description;
  data.reviews.videos = videos;
  data.reviews.images = images;
  data.reviews.rating = rating;

  res.status(200).json({
    success: true,
    message: `review added`,
  });
};

export const findHomestay = async (req, res, next) => {
  const { city } = req.body;

  const data = await Homestay.find({ city: `${city}` });

  if (!data) return next(new ErrorHandler("no data found", 404));

  res.status(200).json({
    success: true,
    data,
  });
};
