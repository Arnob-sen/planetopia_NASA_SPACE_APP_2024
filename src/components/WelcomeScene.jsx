import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const WelcomeScene = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

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
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white text-3xl mb-6">Welcome to TerraXplore! We're excited to have you on the team. What’s your name, space explorer?</div>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <div className="flex justify-around">
          <label className="text-white">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Male
          </label>
          <label className="text-white">
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              className="mr-2"
            />
            Female
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default WelcomeScene;
