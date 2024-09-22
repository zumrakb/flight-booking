import React from "react";
import FilterSelect from "./FilterSelect";
import FilterCheckbox from "./FilterCheckbox";

const FilterFlights = ({ airlines, onAirlineSelect }) => {
  const selectOptions = [
    { value: "lowest-price", label: "Lowest Price" },
    { value: "highest-price", label: "Highest Price" },
    { value: "recommended", label: "Recommended" },
  ];

  const defaultAirlines = [
    { value: "turkish-airlines", label: "Turkish Airlines", price: "$230" },
    { value: "emirates", label: "Emirates", price: "$230" },
  ];

  const airlineOptions =
    airlines.length > 0
      ? airlines.map((airline) => ({
          value: airline.iataCode,
          label: `${airline.name} - $230`,
        }))
      : defaultAirlines;

  const handleAirlineChange = (event) => {
    onAirlineSelect(event.target.value);
  };

  return (
    <div className=" py-0 max-h-[500px] overflow-y-auto ">
      <FilterSelect options={selectOptions} />

      {/* arrival filtre */}
      <div className="mb-2">
        <FilterCheckbox
          title="Arrival Time"
          name="arrival-time"
          options={[
            { value: "5:00 AM - 11:59 PM", label: "5:00 AM - 11:59 PM" },
            { value: "12:00 PM - 5:59 PM", label: "12:00 PM - 5:59 PM" },
          ]}
        />
      </div>

      {/* stop filtreler */}
      <div className="mb-2">
        <FilterCheckbox
          title="Stops"
          name="stops"
          options={[
            { value: "nonstop", label: "Nonstop", price: "$230" },
            { value: "1-stop", label: "1 Stop", price: "$230" },
            { value: "2+-stop", label: "2+ Stops", price: "$230" },
          ]}
        />
      </div>

      {/* airline filtre*/}
      <div className="mb-2">
        <FilterCheckbox
          title="Airlines Included"
          name="airlines"
          options={airlineOptions}
          onChange={handleAirlineChange}
        />
      </div>
    </div>
  );
};

export default FilterFlights;
