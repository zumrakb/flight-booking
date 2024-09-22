import airlinesData from "../data/airlines.json";
import airports from "airports";

const calculateFlightDuration = (departureTime, arrivalTime) => {
  if (!departureTime || !arrivalTime) return "N/A";

  const departureDate = new Date(departureTime);
  const arrivalDate = new Date(arrivalTime);

  const durationMs = departureDate - arrivalDate;

  if (durationMs < 0) return "Invalid duration";

  const totalMinutes = Math.floor(durationMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

const formatTime = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  date.setHours(date.getHours() - 1);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const period = isPM ? "PM" : "AM";

  return `${hours}:${formattedMinutes} ${period}`;
};

const getAirlineNameFromIATA = (iataCode) => {
  const airline = airlinesData.find((item) => item.IATACode === iataCode);
  return airline ? airline.Airline : "Unknown Airline";
};

const getCityNameFromIATA = (iataCode) => {
  const airport = airports.find((a) => a.iata === iataCode);
  return airport ? airport.name : "Unknown";
};

export {
  calculateFlightDuration,
  formatTime,
  getAirlineNameFromIATA,
  getCityNameFromIATA,
};
