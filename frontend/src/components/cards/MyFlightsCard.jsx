import axios from "../../utils/axios";
import { useState, useEffect } from "react";
import {
  calculateFlightDuration,
  getAirlineNameFromIATA,
  formatTime,
} from "../../utils/flightUtils";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import thy from "../../assets/thy.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassOptions = ({ title, value }) => (
  <div className="border border-gray-200 rounded-lg p-4 text-center shadow-sm w-[120px] flex flex-col gap-1">
    <span className="block text-lg font-bold text-gray-700">{value}</span>
    <span className="block text-xs text-gray-700">{title}</span>
  </div>
);

const FlightDetailsCard = ({ flight, onClose }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
    <button
      className="text-red-500 font-semibold text-sm mb-4 hover:text-red-700"
      onClick={onClose}
    >
      Close
    </button>
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Schedule Date:</span>
          <span className="text-gray-700">{flight.scheduleDate}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Flight Number:</span>
          <span className="text-gray-700">{flight.flightNumber}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Airline Code:</span>
          <span className="text-gray-700">{flight.prefixIATA}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Service Type:</span>
          <span className="text-gray-700">{flight.serviceType}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-900 w-32">Flight ID:</span>
          <span className="text-gray-700">{flight.id}</span>
        </div>
      </div>
    </div>
  </div>
);

const FlightCard = ({ flight, toggleDetails, isDetailsVisible, onDelete }) => {
  const {
    flightDirection,
    route,
    scheduleDateTime,
    estimatedLandingTime,
    airline,
    flightDuration,
    flightName,
  } = flight;

  const id = flight._id;
  const destinations = route?.destinations || [];
  const departureAirport = flightDirection === "D" ? "AMS" : destinations[0];
  const arrivalAirport =
    flightDirection === "A" ? "AMS" : destinations[destinations.length - 1];

  const handleDelete = async () => {
    const result = window.confirm(
      "Are you sure you want to delete this flight? You won't be able to revert this!"
    );

    if (result) {
      try {
        const response = await axios.delete(`/my-flight/${id}`);

        if (response.status === 200) {
          toast.success("Your flight has been deleted.");
          onDelete(id);
        } else {
          toast.error("There was a problem deleting your flight.");
        }
      } catch (error) {
        console.error(
          "Flight deleting error:",
          error.response ? error.response.data : error.message
        );
        toast.error("Problem deleting the flight.");
      }
    }
  };

  return (
    <div className="relative w-full">
      <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 transition-transform duration-500 ease-in-out">
        <button
          className="absolute top-1 right-2 text-red-600 hover:text-red-700"
          aria-label="Delete Flight"
          onClick={handleDelete}
        >
          <AiOutlineClose className="text-lg" />
        </button>
        {/* detay */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-none mt-4">
              <img src={thy} alt="Logo" className="w-10 h-10" />
            </div>
            <div className="flex-1 ml-4 sm:ml-6 mt-3">
              <div className="flex items-center justify-between text-gray-900 font-medium text-lg sm:text-2xl">
                <span>
                  {estimatedLandingTime} - {scheduleDateTime}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row text-gray-900 text-xs sm:text-sm mt-2 sm:mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center whitespace-nowrap">
                    <span className="font-sans font-semibold">{airline}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center whitespace-nowrap">
                    <span className="font-sans font-semibold">Nonstop</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center whitespace-nowrap">
                    <span className="font-sans font-semibold">
                      {departureAirport} to {arrivalAirport}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row text-gray-900 text-xs sm:text-sm space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col flex-1">
                  <button
                    className="flex items-center cursor-pointer text-blue-500 font-sans text-sm whitespace-nowrap"
                    onClick={toggleDetails}
                  >
                    Flight Details
                    <AiOutlineDown className="text-blue-500 ml-1" />
                  </button>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-sans whitespace-nowrap">
                    {flightDuration}
                  </span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-sans whitespace-nowrap">
                    {flightName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* kareler detay */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
          <ClassOptions title="Main" value="$156" />
          <ClassOptions title="Comfort+" value="$256" />
          <ClassOptions title="Delta One" value="$356" />
        </div>
      </div>
      {/* detay -more */}
      <div
        className={`transition-all duration-800 ${
          isDetailsVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden mt-2 mb-2`}
      >
        {isDetailsVisible && (
          <FlightDetailsCard flight={flight} onClose={toggleDetails} />
        )}
      </div>
    </div>
  );
};

const MyFlightsCard = () => {
  const [flightData, setFlightData] = useState([]);
  const [selectedFlightId, setSelectedFlightId] = useState(null);

  useEffect(() => {
    const fetchFlightData = async () => {
      toast.loading("Loading flights..."); // Show loading toast
      try {
        const response = await axios.get("/my-flight/");
        const flights = response.data;

        const updatedFlights = flights.map((flight) => ({
          ...flight,
          airline: getAirlineNameFromIATA(flight.prefixIATA),
          scheduleDateTime: formatTime(flight.scheduleDateTime),
          estimatedLandingTime: formatTime(flight.estimatedLandingTime),
          flightDuration: calculateFlightDuration(
            flight.scheduleDateTime,
            flight.estimatedLandingTime
          ),
        }));

        setFlightData(updatedFlights);
        toast.dismiss(); // Dismiss loading toast
      } catch (error) {
        console.error("Error fetching flight data:", error);
        toast.error("Error loading flights.");
      }
    };

    fetchFlightData();
  }, []);

  const toggleDetails = (flightId) => {
    setSelectedFlightId(selectedFlightId === flightId ? null : flightId);
  };

  const handleDelete = (flightId) => {
    setFlightData(flightData.filter((flight) => flight._id !== flightId));
  };

  return (
    <div className="w-screen">
      <ToastContainer />
      {flightData.length === 0 ? (
        <div>Loading...</div>
      ) : (
        flightData.map((flight) => (
          <FlightCard
            key={flight._id}
            flight={flight}
            toggleDetails={() => toggleDetails(flight._id)}
            isDetailsVisible={selectedFlightId === flight._id}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default MyFlightsCard;
