
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from './Card'; // Import the Card component
import avatar from '../assets/astropencil.png'
const AnotherWatchVideo = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the next mission
    navigate("/procced-to-next-quiz");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">
      
      <Card
        title="Watch the Video"
        description={
          <div className="mb-4">
            
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/watch?v=jbSXBbyWsTE"
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

export default AnotherWatchVideo
