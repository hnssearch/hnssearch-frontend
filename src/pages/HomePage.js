import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header className="flex w-full p-3 justify-between">
        <div className="flex space-x-3 items-center">
          <Link to="/dwebpulse">dwebpulse</Link>
        </div>
        <div className="flex space-x-3 items-center">
          <Link to="/About">About</Link>
          <Link to="/Settings">Settings</Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
