// src/components/ReportPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from '../assets/astropencil.png'
import Card from './Card'; // Import the Card component

const ReportPage = () => {
  const location = useLocation();
  const { playerName } = location.state || { playerName: "Explorer" };
  const navigate = useNavigate();

  // Navigate to the WatchVideoPage
  const handleWatchVideo = () => {
    navigate("/watch-video");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">
    <div className="absolute bottom-0 right-0 z-50 p-2">
  {/* <img
    src={avatar}
    alt="Player Avatar"
    className="w-0.5 h-0.5 rounded-full" // You can adjust size and styles as needed
  /> */}
</div>
      
      <Card
        title={`Hey ${playerName}!`}
        description={`Now that we’ve detected a new exoplanet, it’s time to dive deeper and learn how to analyze it. First, let me show you how scientists use something called a 'light curve' to figure out the size of a planet.`}
        buttonLabel="Watch Video"
        onButtonClick={handleWatchVideo}
      />
{/* <div className="absolute bottom-0 right-0 z-50 p-2">
  <img
    src={avatar}
    alt="Player Avatar"
    className=" w-1/2 h-1/2 rounded-full" // You can adjust size and styles as needed
  />
</div> */}
      
    </div>
  );
};

export default ReportPage;
