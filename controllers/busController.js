import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { Bus } from "../models/Bus.js";

export const addBus = async (req, res, next) => {
  const { vendor_name, bus_number, bus_type, timing, from, to, fares } =
    req.body;

  if (
    !vendor_name ||
    !bus_number ||
    !bus_type ||
    !timing | !from ||
    !to ||
    !fares
  )
    return next(new ErrorHandler("please provode all details", 400));

  await Bus.create({
    vendor_name,
    bus_number,
    bus_type,
    timing,
    from,
    to,
    fares,
  });

  res.status(201).json({
    success: true,
    message: `Bus number ${bus_number} added`,
  });
};

export const editBus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Bus.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { vendor_name, bus_number, bus_type, timing, from, to, fares } =
    req.body;

  if (
    !vendor_name ||
    !bus_number ||
    !bus_type ||
    !timing ||
    !from ||
    !to ||
    !fares
  )
    return next(new ErrorHandler("please provide all details", 400));

  data.vendor_name = vendor_name;
  data.bus_number = bus_number;
  data.bus_type = bus_type;
  data.timing = timing;
  data.from = from;
  data.to = to;
  data.fares = fares;

  await data.save();

  res.status(200).json({
    success: true,
    message: `bus number: ${bus_number} data updated`,
  });
};

export const updateStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Bus.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { bus_status } = req.body;

  data.bus_status = bus_status;

  await data.save();

  res.status(200).json({
    success: true,
    message: `bus number ${data.bus_number} status updated to ${data.bus_status}`,
  });
};

export const addReview = async (req, res, next) => {
  const { id } = req.params;

  const data = await Bus.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { user_name, title, description, videos, images, rating } = req.body;

  if (!user_name || !title || !description || !videos || !images || !rating)
    return next(new ErrorHandler("please provide all data", 400));

  data.reviews.user_name = user_name;
  data.reviews.title = title;
  data.reviews.description = description;
  data.reviews.videos = videos;
  data.reviews.images = images;
  data.reviews.rating = rating;

  await data.save();

  res.status(200).json({
    success: true,
    message: `review added`,
  });
};
