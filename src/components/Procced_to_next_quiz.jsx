// src/components/NextMissionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from './Card'; // Import the Card component

const Procced_To_next_quiz = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Navigate to the Quiz page
    navigate("/another_chapter_quiz");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">
    
      <Card
        
        description="Ready for a quick quiz? Let’s see what you learned!"
        buttonLabel="Take Quiz"
        onButtonClick={handleStartQuiz}
      />
    </div>
  );
};

export default Procced_To_next_quiz;
