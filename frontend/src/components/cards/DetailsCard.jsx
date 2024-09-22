import React from "react";
import { formatTime } from "../../utils/flightUtils";

const FlightDetailsCard = ({ flight, onClose }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
    <button
      className="text-red-500 font-semibold text-sm mb-4 hover:text-red-700"
      onClick={onClose}
    >
      Close
    </button>

    {/* detaylar */}
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        {/* tarih ve saat */}
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Schedule Date:</span>
          <span className="text-gray-700">
            {formatTime(flight.scheduleDateTime)}
          </span>
        </div>
        {/* uçuş no */}
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Flight Number:</span>
          <span className="text-gray-700">{flight.flightNumber}</span>
        </div>
        {/* airline kod */}
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Airline Code:</span>
          <span className="text-gray-700">{flight.airlineCode}</span>
        </div>

        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Service Type:</span>
          <span className="text-gray-700">{flight.serviceType}</span>
        </div>
        {/* ad */}
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Flight Name:</span>
          <span className="text-gray-700">{flight.flightName}</span>
        </div>
      </div>
    </div>
  </div>
);

export default FlightDetailsCard;
