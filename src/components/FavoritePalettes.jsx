import React from "react";

const FavoritePalettes = ({ favorites, onRemove }) => {
  return (
    <div className="p-4 border border-gray-600 rounded shadow">
      {favorites.map((palette, index) => (
        <div key={index} className="mb-4">
          <div className="flex">
            {palette.map((color, i) => (
              <div
                key={i}
                className="flex-1 h-10"
                style={{
                  backgroundColor: color,
                  borderRight: i !== palette.length - 1 ? "1px solid #ffffffd6" : "none", // Divider between colors
                }}
              ></div>
            ))}
          </div>

          <button
            onClick={() => onRemove(index)}
            className="text-red-500 mt-2 hover:underline"
          >
            Remove
          </button>

          {index !== favorites.length - 1 && (
            <hr className="my-4 border-gray-600" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FavoritePalettes;
