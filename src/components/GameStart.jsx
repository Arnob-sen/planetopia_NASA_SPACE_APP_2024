import React from "react";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/210886_small.mp4"; // Import the video
import Card from "./Card";
import Button from "./Button";
const GameStart = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/map");
  };

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />

      {/* Overlay content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between items-center text-center">
        {/* Title */}
        <h1 className="text-6xl font-bold text-white mt-12 tracking-widest">
          PLANETOPIA
        </h1>

        {/* Start Button */}
       <Button onClick={handleStart} />
        
        
      </div>

      

      {/* Background overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default GameStart;
