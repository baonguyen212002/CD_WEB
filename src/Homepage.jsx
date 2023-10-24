import React from "react";
import './Homepage.css';
import TimeLine from "./components/Timeline/Timeline";
import Navbar from "./components/navigation/Navbar";
function Homepage() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 w-full home__nav h-full">
        <Navbar />
      </div>
      <div className="col-span-3">
        <TimeLine />
      </div>
    </div>
  );
}

export default Homepage;
