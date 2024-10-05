import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from '../assets/astropencil.png'
import Card from './Card'; // Import the Card component

const AnotherChapter = () => {
  const location = useLocation();
  const { playerName } = location.state || { playerName: "Explorer" };
  const navigate = useNavigate();

  
  const handleWatchVideo = () => {
    navigate("/another-watch-video");
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
        title={`Next up, ${playerName}!`}
        description={` let's learn how scientists study the atmosphere of a planet using a method called spectroscopy! This will help us find out what gases are floating around in the planet’s air.`}
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

export default AnotherChapter;
