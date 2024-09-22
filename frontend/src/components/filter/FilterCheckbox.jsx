import React from "react";

const FilterRadioGroup = ({ title, name, options, onChange }) => (
  <div className="mb-2">
    <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="mr-2 h-3 w-3 accent-purple-700 border border-purple-800 rounded-full appearance-none checked:bg-purple-700 checked:border-purple-700"
            onChange={onChange}
          />
          <div className="flex justify-between w-full ">
            <div className="text-sm text-gray-700">{option.label}</div>
            {option.price && (
              <div className="ml-2 text-gray-500 text-sm">{option.price}</div>
            )}
          </div>
        </label>
      ))}
    </div>
  </div>
);

export default FilterRadioGroup;
