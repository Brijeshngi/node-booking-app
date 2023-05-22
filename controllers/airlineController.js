import "express-async-errors";
import { Airlines } from "../models/Airlines.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addAirline = async (req, res, next) => {
  const {
    airlines,
    flight_number,
    from,
    to,
    travelling_class,
    fares,
    occupancy,
  } = req.body;

  if (
    !airlines ||
    !flight_number ||
    !from ||
    !to ||
    !travelling_class ||
    !fares ||
    !occupancy
  )
    return next(new ErrorHandler("please provide all details", 400));

  const data = await Airlines.create({
    airlines,
    flight_number,
    from,
    to,
    travelling_class,
    fares,
    occupancy,
  });

  res.status(201).json({
    success: true,
    message: `flight number ${flight_number} added`,
  });
};

export const editAirline = async (req, res, next) => {
  const { id } = req.params;

  const data = await Airlines.findById(id);

  if (!data) return next(new ErrorHandler("No data found", 404));

  const {
    airlines,
    flight_number,
    timing,
    from,
    to,
    travelling_class,
    fares,
    occupancy,
  } = req.body;

  if (
    !airlines ||
    !flight_number ||
    !timing ||
    !from ||
    !to ||
    !travelling_class ||
    !fares ||
    !occupancy
  )
    return next(new ErrorHandler("please provide all details", 400));

  data.airlines = airlines;
  data.flight_number = flight_number;
  data.timing = timing;
  data.from = from;
  data.to = to;
  data.travelling_class = travelling_class;
  data.fares = fares;
  data.occupancy = occupancy;

  await data.save();

  res.status(200).json({
    success: true,
    message: `updated`,
  });
};

export const updateFlightStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Airlines.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { flight_status } = req.body;

  if (!flight_status) return next(new ErrorHandler("please provide data", 400));

  data.flight_status = flight_status;
  flight = data.flight_number;

  res.status(200).json({
    success: true,
    message: `flight ${flight} status updated`,
  });
};

export const addReview = async (req, res, next) => {
  const { id } = req.params;

  const data = await Airlines.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  const { user_name, title, description, videos, images, rating } = req.body;
  // console.log(title);

  let userRating = Number(data.reviews.rating);

  data.reviews.rating = userRating;

  const alldata = data.reviews.push({
    user_name,
    title,
    description,
    videos,
    images,
    rating,
  });

  await data.save();

  res.status(200).json({
    success: true,
    alldata,
    message: `review added`,
  });
};

export const findFlight = async (req, res, next) => {
  const { from, to } = req.body;

  const data = await Airlines.find({
    $and: [{ from: `${from}` }, { to: `${to}` }],
  });

  // const data = await Airlines.findOne({ from: `${from}` }, { to: `${to}` });

  if (!data) return next(new ErrorHandler("no data found", 404));

  res.status(200).json({
    success: true,
    data,
  });
};

// findflight must be greater than current date
//push passenger data API
// find occupancy and compare with occupied then allow to book API

export const addPassengerToFlight = async (req, res, next) => {
  const { id } = req.params;

  const data = await Airlines.findById(id);

  if (!data) return next(new ErrorHandler("No Data found", 404));

  let occupied = Number(data.occupied);

  if (occupied >= 10) return next(new ErrorHandler("Not allowed", 400));

  data.occupied = occupied + 1;

  await data.save();

  res.status(200).json({
    success: true,
    message: `Passenger added to flight ${data.flight_number}`,
  });
};
