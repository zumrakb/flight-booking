const express = require("express");
const router = express.Router();
const {
  deleteMyFlight,
  getFlight,
  getMyFlight,
  postMyFlight,
} = require("../controller/flightController.js");

router.get("/flight", getFlight);

router.post("/my-flight", postMyFlight);

router.get("/my-flight", getMyFlight);

router.delete("/my-flight/:id", deleteMyFlight);

module.exports = router;
