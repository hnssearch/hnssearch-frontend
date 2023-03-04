import React from "react";

function StatTile({ title, value }) {
  return (
    <div className="md:h-48 flex items-center justify-center mb-10 bg-white rounded-lg shadow-md p-4 text-center dark:bg-neutral-700">
      <div className="flex flex-col justify-center text-gray-700 dark:text-neutral-200">
        <p className="text-4xl font-bold">{value}</p>
        <h2 className="text-lg font-medium mt-5 mb-2">{title}</h2>
      </div>
    </div>
  );
}

export default StatTile;
