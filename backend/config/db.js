const mongoose = require("mongoose");
const URL = process.env.MONGO_URI;
// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("bağlandı");
  } catch (error) {
    console.error("bağlantı hatası:", error);
    throw error;
  }
};

module.exports = connect;
