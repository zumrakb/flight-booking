require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const connectDB = require("./config/db.js");
const path = require("path");
const apiV1 = require("./routes/apiV1.js");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// route
app.use("/api/v1", apiV1);

// sending frontend files
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// listener
app.listen(port, async () => {
  await connectDB();
  console.log("server şu portta çalışıyor:", port);
});
