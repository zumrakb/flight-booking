import React from "react";
import { IoIosAirplane } from "react-icons/io";
import { TbPlaneDeparture, TbPlaneArrival } from "react-icons/tb";
import {
  getCityNameFromIATA,
  getAirlineNameFromIATA,
  formatTime,
  calculateFlightDuration,
} from "../../utils/flightUtils";
import FlightDetailsCard from "./DetailsCard";

const FlightItem = ({
  flight,
  activeFlight,
  toggleDetailsVisibility,
  handleBookFlight,
  setActiveFlight,
}) => {
  const {
    id,
    flightDirection,
    route,
    scheduleDateTime,
    estimatedLandingTime,
    prefixIATA,
  } = flight;

  const flightRoute = route?.destinations || [];
  const departure = flightDirection === "D" ? "AMS" : flightRoute[0];
  const arrival =
    flightDirection === "A" ? "AMS" : flightRoute[flightRoute.length - 1];
  const duration = calculateFlightDuration(
    scheduleDateTime,
    estimatedLandingTime
  );
  const airline = getAirlineNameFromIATA(prefixIATA);

  return (
    <div key={id} className="relative">
      <div
        className="relative max-w-full bg-white p-4 mt-3"
        style={{ borderRadius: "12px 12px 12px 0" }}
      >
        <div className="flex flex-col">
          <h2 className="text-sm mb-3 font-bold">
            {getCityNameFromIATA(departure)} - {getCityNameFromIATA(arrival)}
          </h2>

          <div className="flex flex-col">
            <div className="flex justify-between">
              {/* Departure Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <TbPlaneDeparture size={20} />
                  <div className="text-sm text-gray-500">Departure</div>
                </div>
                <div className="text-sm text-gray-900 font-semibold">
                  {formatTime(scheduleDateTime)}
                </div>
                <div className="text-sm text-gray-700">
                  Airport: {departure}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="border-t-4 border-gray-300 w-36"></div>
              </div>
              {/* Airline Info */}
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-green-700">
                  {airline}
                </div>
                <IoIosAirplane size={20} className="text-purple-800" />
                <div className="text-sm text-gray-800 ">
                  {duration} (Nonstop)
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="border-t-4 border-gray-300 w-36"></div>
              </div>
              {/* Arrival Info */}
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <TbPlaneArrival size={20} />
                  <div className="text-sm text-gray-500">Arrival</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-md text-gray-900 font-semibold">
                    {formatTime(estimatedLandingTime)}
                  </div>
                </div>
                <div className="text-sm text-gray-900">Airport: {arrival}</div>
              </div>
            </div>
            {/* Pricing Info */}
            <div className="pt-3">
              <div className="text-sm text-purple-800 font-bold">
                Price: $200
              </div>
              <div className="text-sm text-gray-500 font-semibold">
                Round Trip
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleBookFlight(flight)}
          className="absolute bottom-0 right-0 bg-purple-800 text-white hover:bg-purple-600 py-2 px-8 rounded-bl-none rounded-tr-none rounded-tl-xl rounded-br-xl"
        >
          Book Flight
        </button>
      </div>

      <div className="flex justify-start">
        <button
          onClick={() => toggleDetailsVisibility(flight)}
          className="bg-gray-400 bg-opacity-40 text-purple-800 hover:bg-slate-100 py-1 px-4 rounded text-sm"
          style={{ textDecoration: "underline" }}
        >
          View Details
        </button>
      </div>

      {activeFlight && activeFlight.id === flight.id && (
        <FlightDetailsCard
          flight={activeFlight}
          onClose={() => setActiveFlight(null)}
        />
      )}
    </div>
  );
};

export default FlightItem;
