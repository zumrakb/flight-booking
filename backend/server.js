require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const connectDB = require("./config/db.js");

const apiV1 = require("./routes/apiV1.js");

// middleware
app.use(cors());
app.use(express.json());

// route
app.use("/api/v1", apiV1);

// listener
app.listen(port, async () => {
  await connectDB();
  console.log("server şu portta çalışıyor:", port);
});
