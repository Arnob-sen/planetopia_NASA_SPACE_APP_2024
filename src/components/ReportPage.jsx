// src/components/ReportPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
      {/* Use the Card component for displaying the report information */}
      <Card
        title={`Hey ${playerName}!`}
        description={`Now that we’ve detected a new exoplanet, it’s time to dive deeper and learn how to analyze it. First, let me show you how scientists use something called a 'light curve' to figure out the size of a planet.`}
        buttonLabel="Watch Video"
        onButtonClick={handleWatchVideo}
      />
    </div>
  );
};

export default ReportPage;
