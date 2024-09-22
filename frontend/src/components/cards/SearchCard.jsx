import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import dayjs from "dayjs";
import axios from "../../utils/axios";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

const Search = ({ setLoading, setFilteredFlight }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedArrival, setIsFocusedArrival] = useState(false);
  const [tripType, setTripType] = useState("round");
  const [direction, setDirection] = useState("");
  const [arrival, setArrival] = useState("");
  const [flightDate, setFlightDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [returnDate, setReturnDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [showFlightDatePicker, setShowFlightDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
  const today = new Date();

  const handleSearch = async () => {
    if (!direction || !arrival || !flightDate.startDate) {
      toast.warning("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    const fromAirportCode = direction.toUpperCase();
    const toAirportCode = arrival.toUpperCase();

    try {
      let directionFilter;
      if (fromAirportCode !== "AMS" && toAirportCode === "AMS") {
        directionFilter = "A";
      } else if (fromAirportCode === "AMS" && toAirportCode !== "AMS") {
        directionFilter = "D";
      }

      if (directionFilter) {
        setLoading(true);
        const response = await axios.get("/flight", {
          params: {
            flightdate: dayjs(flightDate.startDate).format("YYYY-MM-DD"),
            direction: directionFilter,
          },
        });
        setLoading(false);
        const flights = response.data.flights;

        if (Array.isArray(flights)) {
          const filteredFlights = flights.filter((flight) => {
            const destinations = flight.route.destinations || [];
            return directionFilter === "A"
              ? destinations.includes(fromAirportCode)
              : destinations.includes(toAirportCode);
          });

          if (filteredFlights.length === 0) {
            toast.error("Belirtilen kriterlere göre uçuş bulunamadı.");
          } else {
            setFilteredFlight(filteredFlights);
            toast.success("Flights are found!");
          }
        } else {
          console.error("Flight data is not an array:", flights);
        }
      }
    } catch (error) {
      console.error("Flight data error:", error.message);
      toast.error("Uçuş verileri alınırken bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-xl">
      <ToastContainer />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaPlane size={20} />
          <h2 className="text-md font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex items-center">
          <div className="flex trip-options">
            <div
              className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-l-full ${
                tripType === "round"
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-purple-900"
              } hover:text-white border border-r-0 border-gray-300`}
              onClick={() => setTripType("round")}
            >
              Round trip
            </div>
            <div
              className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-r-full ${
                tripType === "one"
                  ? "bg-purple-800 text-white"
                  : "bg-gray-200 text-purple-900"
              } hover:text-white border border-gray-300`}
              onClick={() => setTripType("one")}
            >
              One way
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 ">
        <div
          className={`lg:mb-0 border rounded-xl py-2 px-2 w-full lg:w-1/4 ${
            isFocused ? "border-purple-700" : "border-gray-300"
          }`}
        >
          <div className="flex gap-2">
            <FaPlaneDeparture size={20} color="#6B21A8" />
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Airport Code : TFS.."
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>

        <div
          className={`lg:mb-0 border rounded-xl py-2 px-2 w-full lg:w-1/4 ${
            isFocusedArrival ? "border-purple-700" : "border-gray-300"
          }`}
        >
          <div className="flex gap-2">
            <FaPlaneArrival size={20} color="#6B21A8" />
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Airport Code : AMS.."
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              onFocus={() => setIsFocusedArrival(true)}
              onBlur={() => setIsFocusedArrival(false)}
            />
          </div>
        </div>

        <div className="relative">
          <div
            className="lg:mb-0 border rounded-xl py-2 px-2  w-full lg:w-[300px] border-gray-300 cursor-pointer"
            onClick={() => setShowFlightDatePicker((prev) => !prev)}
          >
            <div className="flex gap-2 items-center justify-between">
              <span>{dayjs(flightDate.startDate).format("YYYY-MM-DD")}</span>
              <BsFillCalendarDateFill size={18} color="#5831a0" />
            </div>
          </div>
          {showFlightDatePicker && (
            <div className="absolute ">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  setFlightDate(item.selection);
                  setShowFlightDatePicker(false);
                }}
                moveRangeOnFirstSelection={false}
                ranges={[flightDate]}
                minDate={today}
                rangeColors={["#6d28d9"]}
              />
            </div>
          )}
        </div>

        {tripType === "round" && (
          <div className="relative">
            <div
              className="lg:mb-0 border rounded-xl py-2 px-2 w-full lg:w-[300px] border-gray-300 cursor-pointer"
              onClick={() => setShowReturnDatePicker((prev) => !prev)}
            >
              <div className="flex gap-2 items-center justify-between">
                <span>{dayjs(returnDate.startDate).format("YYYY-MM-DD")}</span>
                <BsFillCalendarDateFill size={18} color="#5831a0" />
              </div>
            </div>
            {showReturnDatePicker && (
              <div className="absolute ">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    setReturnDate(item.selection);
                    setShowReturnDatePicker(false);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={[returnDate]}
                  minDate={today}
                  rangeColors={["#6d28d9"]}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className="flex
    "
      >
        <button
          className="bg-purple-800 text-white py-2 px-4 rounded-xl  hover:bg-purple-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
