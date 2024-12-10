import React from "react";

const MoodSelector = ({ moods, onSelectMood }) => {
  return (
    <div className="flex flex-col items-center my-4">
      <label
        htmlFor="mood-dropdown"
        className="block text-lg font-semibold text-gray-200 mb-2"
      >
        Select Your Mood
      </label>
      <select
        id="mood-dropdown"
        onChange={(e) => onSelectMood(e.target.value)}
        className="w-3/4 max-w-md bg-gray-800 text-white text-lg py-3 px-4 rounded-lg shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="" disabled selected>
          Choose your Mood
        </option>
        {moods.map((mood) => (
          <option key={mood} value={mood} className="text-gray-200">
            {mood}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MoodSelector;
