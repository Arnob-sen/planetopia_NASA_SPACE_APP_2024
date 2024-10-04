// src/components/ReportPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ReportPage = () => {
  const location = useLocation();
  const { playerName } = location.state || { playerName: "Explorer" };
  const navigate = useNavigate();
  
  // Default to "Explorer" if no name provided
  const handleWatchVideo = () => {
    // Navigate to the WatchVideoPage
    navigate("/watch-video");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl mb-6">Hey {playerName}!</h1>
      <p className="text-2xl mb-8 text-center">
        Now that we’ve detected a new exoplanet, it’s time to dive deeper and
        learn how to analyze it. First, let me show you how scientists use something
        called a 'light curve' to figure out the size of a planet.
      </p>

      {/* New Button to watch the video */}
      <button onClick={handleWatchVideo} className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl">
        Watch Video
      </button>
    </div>
  );
};

export default ReportPage;
