import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FlightItem from "./FlightItem";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlightsCard = ({ filteredFlight = [] }) => {
  const [activeFlight, setActiveFlight] = useState(null);
  const navigate = useNavigate();

  const handleBookFlight = async (flight) => {
    try {
      await axios.post("/my-flight", flight);
      toast.success("Flight booked successfully!");
      navigate("/my-flights");
    } catch (err) {
      console.error(
        "Error booking flight:",
        err.response ? err.response.data : err.message
      );
      toast.error("Flight booking failed. Please try again.");
    }
  };

  const toggleDetailsVisibility = (flight) => {
    if (activeFlight && activeFlight.id === flight.id) {
      setActiveFlight(null);
    } else {
      setActiveFlight(flight);
    }
  };

  return (
    <div className="px-6 lg:px-0">
      <ToastContainer />
      {filteredFlight.map((flight) => (
        <FlightItem
          key={flight.id}
          flight={flight}
          activeFlight={activeFlight}
          toggleDetailsVisibility={toggleDetailsVisibility}
          handleBookFlight={handleBookFlight}
          setActiveFlight={setActiveFlight}
        />
      ))}
    </div>
  );
};

export default FlightsCard;
