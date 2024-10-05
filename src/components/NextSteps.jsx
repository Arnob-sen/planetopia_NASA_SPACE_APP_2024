import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card'; // Your reusable Card component

const NextStepsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerName } = location.state || { playerName: "Explorer" }; // Default to "Explorer" if no name provided

  const handleWatchVideo = () => {
    // Navigate to the watch video page
    navigate('/watch-video');
  };

  const handleQuiz = () => {
    // Navigate to the quiz page
    navigate('/second-quiz');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-space-lab2 text-white">
      <Card
        title={`Alright`}
        description={`In the previous tutorial, you learned how scientists use the "light curve" method to calculate a planet's orbital period—the amount of time it takes for the planet to travel around its star. I have a quick question for you...`}
        buttonLabel="Watch Video"
        onButtonClick={handleWatchVideo}
        secondaryButtonLabel="Quiz"
        onSecondaryButtonClick={handleQuiz}
      />
    </div>
  );
};

export default NextStepsPage;
