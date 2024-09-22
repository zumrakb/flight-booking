import React from "react";
import Header from "../components/header/my-flights/Header";
import MyFlightsCard from "../components/cards/MyFlightsCard";
import { IoMdInformationCircleOutline } from "react-icons/io";

const MyFlightsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-between p-4 mt-5 ">
        <div className="flex items-center space-x-4">
          <label className="text-gray-900 font-sans">Sort by:</label>
          <select className=" bg-transparent border-none text-gray-900 font-bold  cursor-pointer focus:outline-none">
            <option>Recommended</option>
            <option>Price</option>
            <option>Duration</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <IoMdInformationCircleOutline size={22} color="blue" />
            <p className="text-gray-800">Avg Fare:</p>
          </div>
          <h2 className="font-bold">$225</h2>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-center ">
          <MyFlightsCard />
        </div>
      </div>
    </div>
  );
};

export default MyFlightsPage;
