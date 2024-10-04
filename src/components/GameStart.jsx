// // src/components/GameStart.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import videoBg from '../assets/210886_small.mp4'
// const GameStart = () => {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate("/welcome");
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
//               <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//         src={videoBg}
//         autoPlay
//         loop
//         muted
//       />
//       <h1 className="text-white text-4xl mb-8">Planetopia</h1>
//       <button
//         onClick={handleStart}
//         className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-2xl"
//       >
//         Start Game
//       </button>
//     </div>
//   );
// };

// export default GameStart;
// src/components/GameStart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/210886_small.mp4";  // Import the video

const GameStart = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/welcome");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoBg}
        autoPlay
        loop
        muted
      />

      
      <h1 className="text-white text-4xl mb-8 z-10">Planetopia</h1>
      
      
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-2xl z-10"
      >
        Start Game
      </button>
    </div>
  );
};

export default GameStart;
