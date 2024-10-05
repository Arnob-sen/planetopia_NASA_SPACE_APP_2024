import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from './Card'; // Your reusable Card component

const Second_Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isCorrect } = location.state || { isCorrect: false }; // Get the result from the previous page
  const { playerName } = location.state || { playerName: "Explorer" };

  const handleContinue = () => {
    
    navigate('/next-steps');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-space-lab2 text-white">
      <Card
        title={isCorrect ? 'nice!Orbital Period:9 years' : 'OOPSS!Orbital Period:9 years'}
        description={
          isCorrect
            ? `Great job! The light curve helps us measure the planet’s orbital period—how long it takes to orbit its star. You’re doing awesome`
            : "That's not correct, but don't worry, you can try again and there are many mission also"
        }
        buttonLabel="Continue"
        onButtonClick={handleContinue}
      />
    </div>
  );
};

export default Second_Result;
