import React from "react";

function StatTile({ title, value }) {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 text-center h-48">
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-bold">{value}</p>
        <h2 className="text-lg font-medium mt-5 mb-2">{title}</h2>
      </div>
    </div>
  );
}

export default StatTile;
