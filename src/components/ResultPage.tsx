import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card'; // Your reusable Card component

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCorrect } = location.state || { isCorrect: false }; // Get the result from the previous page
  const { playerName } = location.state || { playerName: "Explorer" };

  const handleContinue = () => {
    
    navigate('/next-mission');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-space-lab2 text-white">
      <Card
        title={isCorrect ? 'Wowww!Planet Radius:2.21 x Earth (estimate)' : 'OOPSS!Planet Radius:2.21 x Earth (estimate)'}
        description={
          isCorrect
            ? `That’s right! Great job. You’ve just unlocked new data about this exoplanet!`
            : "That's not correct, but don't worry, you can try again and there are many mission also"
        }
        buttonLabel="Continue"
        onButtonClick={handleContinue}
      />
    </div>
  );
};

export default ResultPage;
