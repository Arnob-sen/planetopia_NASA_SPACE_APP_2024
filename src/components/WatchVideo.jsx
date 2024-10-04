// src/components/WatchVideoPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const WatchVideoPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Define the next step of the game
    navigate("/next-mission"); // Update this with your next route
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl mb-6">Watch the Video</h1>
      <div className="mb-8">
        {/* Embedded YouTube video */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vka0W8tn4EU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl"
      >
        Continue
      </button>
    </div>
  );
};

export default WatchVideoPage;
