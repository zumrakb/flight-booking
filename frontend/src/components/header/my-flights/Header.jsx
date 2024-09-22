import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 6; i++) {
      stars.push(
        <FaStar
          key={i}
          size={16}
          color={i <= ratingValue ? "#FFD700" : "#E4E5E9"}
          onClick={() => setRatingValue(i)}
          className="cursor-pointer"
        />
      );
    }
    return stars;
  };

  return (
    <header className="bg-white p-4">
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row sm:justify-between"
      >
        <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
          <>
            <div className="relative flex-1 min-w-[110px]">
              <button className="bg-white border border-gray-200 hover:border-gray-400 text-gray-800 font-sans rounded-lg shadow-sm transition duration-150 ease-in-out w-full text-center py-2">
                Times
              </button>
            </div>
            <div className="relative flex-1 min-w-[110px]">
              <button className="bg-white border border-gray-100 hover:border-gray-400 text-gray-800 font-sans rounded-lg shadow-sm transition duration-150 ease-in-out w-full text-center py-2">
                Stop
              </button>
            </div>
            <div className="relative flex-1 min-w-[110px]">
              <button className="bg-white border border-gray-100 hover:border-gray-400 text-gray-800 font-sans rounded-lg shadow-sm transition duration-150 ease-in-out w-full text-center py-2">
                Airlines
              </button>
            </div>
            <div className="relative flex-1 min-w-[110px]">
              <button className="bg-white border border-gray-100 hover:border-gray-400 text-gray-800 font-sans rounded-lg shadow-sm transition duration-150 ease-in-out w-full text-center py-2">
                Airports
              </button>
            </div>
            <div className="relative flex-1 min-w-[110px]">
              <button className="bg-white border border-gray-100 hover:border-gray-400 text-gray-800 font-sans rounded-lg shadow-sm transition duration-150 ease-in-out w-full text-center py-2">
                Amenities
              </button>
            </div>
          </>

          <h1
            className="min-w-[110px] text-blue-600 font-bold mr-2 cursor-pointer flex items-center select-none"
            style={{ userSelect: "none" }}
          >
            Edit Search
            <span
              className={`ml-2 inline-block transition-transform duration-300 `}
              style={{ fontSize: "0.75rem" }}
            >
              <IoMdArrowDropdown size={20} />
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className=" flex gap-1 flex-wrap w-[60px]">{renderStars()}</div>
          <div className=" flex gap-1 flex-wrap w-[60px]">{renderStars()}</div>
          <div className=" flex gap-1 flex-wrap w-[60px]">{renderStars()}</div>
          <div className=" flex gap-1 flex-wrap w-[60px]">{renderStars()}</div>
          <div className=" flex gap-1 flex-wrap w-[60px]">{renderStars()}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
