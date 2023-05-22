import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { City } from "../models/City.js";

export const addCity = async (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  if (!name) return next(new ErrorHandler("provide name", 400));

  await City.create({
    name,
  });

  res.status(201).json({
    success: true,
    message: `${name} city added`,
  });
};

export const updateCity = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const data = await City.findById(id);
  console.log(data);
  if (!data) return next(new ErrorHandler("no data found", 404));

  const { name } = req.body;

  if (!name) return next(new ErrorHandler("provide name", 400));

  data.name = name;

  await data.save();

  res.status(201).json({
    success: true,
    message: `${name} city updated`,
  });
};
