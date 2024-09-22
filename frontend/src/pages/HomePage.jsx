import { useState } from "react";
import Header from "../components/header/home/Header.jsx";
import SearchCard from "../components/cards/SearchCard.jsx";
import FlightsCard from "../components/cards/FlightsCard.jsx";
import FilterFlights from "../components/filter/FilterFlights.jsx";
import Loading from "../components/loading/Loading.jsx";
import { FaCar, FaHotel, FaUmbrellaBeach } from "react-icons/fa";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [airlines, setAirlines] = useState([]);
  const [selectedAirline, setSelectedAirline] = useState(null);
  const [filteredFlight, setFilteredFlight] = useState([]);

  const handleAirlinesUpdate = (airlines) => {
    setAirlines(airlines);
  };

  const handleAirlineSelect = (selectedAirline) => {
    setSelectedAirline(selectedAirline);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* header kısmı */}
      <Header />
      <div className=" flex flex-col md:flex-row gap-4 px-4 ">
        <div className="flex flex-col flex-grow w-full  ">
          <SearchCard
            setLoading={setLoading}
            setFilteredFlight={setFilteredFlight}
          />
          <div className="flex flex-col md:flex-row gap-4 justify-between ">
            <div className="flex flex-col w-3/4 ">
              <FlightsCard
                filteredFlight={filteredFlight}
                onAirlinesUpdate={handleAirlinesUpdate}
                selectedAirline={selectedAirline}
              />
            </div>
            <div className="flex-col  md:block hidden w-1/4">
              <FilterFlights
                airlines={airlines}
                onAirlineSelect={handleAirlineSelect}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:space-y-4 space-y-2 ">
          <div className="flex flex-row md:flex-col gap-4 bg-gray-100">
            <div className="relative w-72 h-48">
              <img
                src={photo1}
                alt="Amazing Destination"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2 flex flex-col items-start text-white">
                <FaCar className="text-lg" />
                <span>CAR RENTALS</span>
              </div>
            </div>

            <div className="relative w-72 h-48">
              <img
                src={photo2}
                alt="Adventure Awaits"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2  flex flex-col items-start  text-white">
                <FaHotel className="text-lg" />
                <span>HOTELS</span>
              </div>
            </div>

            <div className="relative w-72 h-48">
              <img
                src={photo3}
                alt="Relax and Unwind"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2  flex flex-col items-start  text-white">
                <FaUmbrellaBeach className="text-lg" />
                <span>TRAVEL PACKAGES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default HomePage;
