require('dotenv').config();
const mongoose = require('mongoose');

let ConnectionString = "mongodb+srv://api_db_user:J%4012345678ed@cluster001.ws4lhnm.mongodb.net/MidtermDB?appName=Cluster001";

const clientOptions = { 
  serverApi: { 
    version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};

module.exports = async function () {
  try {
    await mongoose.connect(ConnectionString, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("==== Backend successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    await mongoose.disconnect();
  }
}