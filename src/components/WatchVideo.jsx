
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from './Card'; // Import the Card component

const WatchVideoPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the next mission
    navigate("/next-mission");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Use the Card component for displaying the video and continue button */}
      <Card
        title="Watch the Video"
        description={
          <div className="mb-4">
            {/* Embedded YouTube video */}
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/vka0W8tn4EU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        }
        buttonLabel="Continue"
        onButtonClick={handleContinue}
      />
    </div>
  );
};

export default WatchVideoPage;
