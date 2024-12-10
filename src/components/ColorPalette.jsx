import React from "react";

const ColorPalette = ({ palette, onCopy }) => {
  return (
    <div className="flex flex-col gap-4 my-4">
      {palette.map((color, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-full h-12 rounded shadow cursor-pointer px-4"
          style={{ backgroundColor: color }}
          onClick={() => onCopy(color)}
        >
          {/* Empty spacer to make it visually balanced */}
          <span></span>
          {/* Hex Code */}
          <span className="text-white bg-black px-2 opacity-50 rounded font-semibold text-sm">{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
