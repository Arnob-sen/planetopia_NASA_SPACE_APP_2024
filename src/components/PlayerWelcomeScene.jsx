
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PlayerWelcomeScene = () => {
  const location = useLocation();
  const { playerName } = location.state || { playerName: "Explorer" }; // Default to "Explorer" if no name provided

  // State to control when the next message appears
  const [missionStarted, setMissionStarted] = useState(0);

  const handleProceed = () => {
    // When the button is clicked, show the next message
    setMissionStarted(missionStarted+1);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        {missionStarted==0&& (
      <><h1 className="text-white text-4xl mb-8">Welcome, {playerName}!</h1><p className="text-white text-2xl mb-4">
                  We’re excited to have you onboard with Team TerraXplore!
              </p><p className="text-white text-xl mb-6">
                      Together, we'll explore new worlds and solve Earth's problems.
                  </p></>
)}
      {/* New message appears after clicking the button */}
      {missionStarted==1 && (
        <p className="text-white text-2xl mt-6">
          Great news, {playerName}! The Kepler Space Telescope has just discovered something amazing!
        </p>
      )}
      {missionStarted === 2 && (
        <>
          <p className="text-white text-2xl mt-6">
            The team is analyzing the discovery. Prepare yourself to review the first set of data.
          </p>
        </>
      )}

      {/* Proceed button remains the same */}
      <button
        onClick={handleProceed}
        className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl mt-8"
      >
        {missionStarted < 2 ? "Proceed with Mission" : "Watch Report"}
      </button>
    </div>
  );
};

export default PlayerWelcomeScene;
