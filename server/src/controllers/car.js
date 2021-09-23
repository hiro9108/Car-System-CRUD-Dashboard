const CarStatus = require("../models/car");

exports.createCarStatus = async (req, res) => {
  try {
    const { make, model, year, price, status } = req.body;

    const carStatus = new CarStatus({
      make,
      model,
      year,
      price,
      status,
    });
    await carStatus.save();
    res.status(201).json({ car: carStatus, message: "New Car Status Created" });
  } catch (err) {
    console.log("Error createCarStatus", err);
    res.status(400).json({ message: "Bad Request" });
  }
};

exports.getAllCarStatuses = async (req, res) => {
  try {
    const cars = await CarStatus.find();
    res.status(201).json({ cars, message: "Get All Car Statuses" });
  } catch (err) {
    console.log("Error getAllCarStatuses", err);
    res.status(400).json({ message: "Bad Request" });
  }
};

exports.getASpecificCarStatus = async (req, res) => {
  try {
    const car = await CarStatus.findById(req.params.id);
    console.log("car", car);
    res.status(201).json({ car, message: "Get Specific Car Status" });
  } catch (err) {
    console.log("Error getAllCarStatuses", err);
    res.status(400).json({ message: "Bad Request" });
  }
};
