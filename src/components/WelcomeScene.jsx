import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import avatar from '../assets/Planetopia Final Prototype (19).png'
const WelcomeScene = () => {
  const [name, setName] = useState("");
  

  const navigate= useNavigate();

  const handleSubmit = () => {
    if (name) {
        // Navigate to PlayerWelcomeScene and pass the player's name via state
        navigate("/player-welcome", { state: { playerName: name } });
      } else {
        alert("Please enter your name");
      }
  };

  return (

    <div className="bg-space-lab min-h-screen flex flex-col justify-center items-center">
      <Card
        title="Welcome to TerraXplore!"
        description="Please enter your name to get started."
        buttonLabel="Proceed to Mission"
        onButtonClick={handleSubmit}
        inputField={true}
        inputValue={name}
        onInputChange={(e) => setName(e.target.value)}
      />
      <div className="absolute bottom-0 right-0 z-50 p-2 h-screen ">
        <img
          src={avatar}
          alt="Player Avatar"
         
        />
      </div>
    </div>
  );
};

export default WelcomeScene;
