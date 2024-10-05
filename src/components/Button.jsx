// StartButton.jsx
import React from 'react';

const StartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-48 h-16 bg-[#032644] text-white text-2xl font-bold border-2 border-[#4cc0e8] rounded-lg shadow-lg uppercase overflow-hidden mb-20"
    >
      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-[#4cc0e8]"></span>
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-[#4cc0e8]"></span>
      START
    </button>
  );
};

export default StartButton;
