import React from 'react';
  
import backgroundFrame from '../assets/cardbg.png';  // Example frame image

const CharacterCard = ({ name, image }) => {
  return (
    <div 
      className="relative max-w-xs mx-auto bg-no-repeat bg-cover bg-center rounded-xl shadow-md overflow-hidden"
      style={{ backgroundImage: `url(${backgroundFrame})` }}  // Set the background image
    >
      <div className="flex justify-center p-6">
        <img 
          className="h-40 w-40 object-cover rounded-full border-4 border-white" 
          src={image} 
          alt={name} 
        />
      </div>
      <div className="text-center p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      </div>
    </div>
  );
};

export default CharacterCard;
