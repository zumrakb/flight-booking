import React from "react";
import { Link } from "react-router-dom";
import Flightlogo from "../../../assets/flightlogo.png";
import profile from "../../../assets/profile.jpg";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-gray-100">
      {/* header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Flightlogo}
              alt="Flight Logo"
              className="w-12 md:w-10 md:h-10"
            />

            <span className="text-md font-extrabold">PLANE SCAPE</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-1">
            <div className="text-purple-900">
              <IoMdPricetag size={16} />
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-800">
              Deals
            </span>
          </Link>

          <Link to="/" className="flex items-center gap-1">
            <div className="text-purple-900">
              <BsGlobeAsiaAustralia size={16} />
            </div>

            <span className="text-xs md:text-sm font-semibold text-gray-800">
              Discover
            </span>
          </Link>

          <Link to="/my-flights" className="flex items-center gap-2">
            <img
              src={profile}
              alt="Joane Smith"
              className="w-4 md:w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">
              Zumra Kucukbezirci
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
