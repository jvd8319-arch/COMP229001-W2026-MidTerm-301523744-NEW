let CarModel = require('../models/cars');

// GET ONE CAR BY ID
module.exports.getCar = async function (req, res, next) {
  try {
    let car = await CarModel.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Car retrieved successfully.",
      data: car
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

// CREATE A NEW CAR
module.exports.create = async function (req, res, next) {
  try {
    let car = req.body;

    let result = await CarModel.create(car);
    console.log("Result: " + result);

    res.status(200).json({
      success: true,
      message: "Car created successfully.",
      data: result
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

// GET ALL CARS
module.exports.getAll = async function (req, res, next) {
  try {
    let list = await CarModel.find({});

    res.status(200).json({
      success: true,
      message: "Car list retrieved successfully.",
      data: list
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

// UPDATE A CAR
module.exports.update = async function (req, res, next) {
  try {
    let result = await CarModel.updateOne(
      { _id: req.params.id },
      req.body
    );

    console.log("Result: " + JSON.stringify(result));

    if (result.modifiedCount > 0) {
      res.status(200).json({
        success: true,
        message: "Car updated successfully."
      });
    } else {
      throw new Error('Car not updated. Are you sure it exists?');
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

// DELETE A CAR
module.exports.remove = async function (req, res, next) {
  try {
    let result = await CarModel.deleteOne({ _id: req.params.id });
    console.log("Result: " + JSON.stringify(result));

    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: "Car deleted successfully."
      });
    } else {
      throw new Error('Car not deleted. Are you sure it exists?');
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}