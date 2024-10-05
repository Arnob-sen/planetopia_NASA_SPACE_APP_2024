import React from "react";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/map.mp4";

const MapPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/welcome");
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

    </div>
  );
};

export default MapPage;
