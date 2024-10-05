import React from "react";
import { useNavigate } from "react-router-dom";
import Astropencil from "../assets/astropencil.png"; // Import the image
import CharacterCard from "./CharacterCard"; // Import the CharacterCard component 
import Button from "./Button"; // Import the Button component 

const CardPage = () => {
  const navigate = useNavigate();

  const handleWelcome = () => {
    // Navigate to the Quiz page
    navigate("/welcome");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">

    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Character Cards</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CharacterCard
          name="Nanuk - The Bear"
          image={Astropencil} // Pass the imported image
        />

        <CharacterCard
          name="Aria - The Falcon"
          image={Astropencil} // Pass another imported image
        />
      </div>
      <button
          onClick={handleWelcome}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Dive into space
          </button>
    </div>
    </div>
  );
};

export default CardPage;
