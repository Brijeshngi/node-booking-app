import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { City } from "../models/City.js";

export const addCity = async (req, res, next) => {
  const { name } = req.boy;

  if (!name) return next(new ErrorHandler("provide name", 400));

  await Bus.create({
    name,
  });

  res.status(201).json({
    success: true,
    message: `${name} city added`,
  });
};
