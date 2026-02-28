var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Database connection
require('./config/db');

// Routers
var carsRouter = require('./routes/cars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Midterm Application" });
});

// Cars API route
app.use('/cars', carsRouter);

// Error handler
app.use(function (err, req, res, next) {
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

module.exports = app;