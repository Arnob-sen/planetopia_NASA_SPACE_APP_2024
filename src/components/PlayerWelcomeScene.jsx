

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from './Card'; // Import the Card component

import avatar from '../assets/Planetopia Final Prototype (19).png'
const PlayerWelcomeScene = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerName } = location.state || { playerName: "Explorer" }; // Default to "Explorer" if no name provided

  // State to control when the next message appears
  const [missionStarted, setMissionStarted] = useState(0);

  const handleProceed = () => {
    // When the button is clicked, show the next message
    if (missionStarted < 2) {
      // Increment the phase to move to the next message
      setMissionStarted(missionStarted + 1);
    } else {
      // Navigate to the ReportPage
      navigate("/report", { state: { playerName } });
    }
  };

  return (
    <div className="bg-space-lab min-h-screen flex flex-col justify-center items-center">
              {/* <div className="absolute bottom-0 right-0 z-50 p-2 h-screen ">
        <img
          src={avatar}
          alt="Player Avatar"
         
        />
</div> */}
      {missionStarted === 0 && (
        <Card
          title={`Welcome, ${playerName}!`}
          description="We’re excited to have you onboard with Team TerraXplore! Together, we'll explore new worlds and solve Earth's problems."
          buttonLabel="Proceed with Mission"
          onButtonClick={handleProceed}
        />
      )}

      {missionStarted === 1 && (
        <Card
          title={`Great news, ${playerName}!`}
          description="The Kepler Space Telescope has just discovered something amazing!"
          buttonLabel="Proceed with Mission"
          onButtonClick={handleProceed}
        />
      )}

      {missionStarted === 2 && (
        <Card
          title="Mission Update"
          description="The team is analyzing the discovery. Prepare yourself to review the first set of data."
          buttonLabel="Watch Report"
          onButtonClick={handleProceed}
        />
      )}
    </div>
  );
};

export default PlayerWelcomeScene;
