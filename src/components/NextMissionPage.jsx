// src/components/NextMissionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from './Card'; // Import the Card component

const NextMissionPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Navigate to the Quiz page
    navigate("/quiz");
  };

  return (
    <div className="bg-space-lab2 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Use the Card component for displaying the next mission information */}
      <Card
        title="That was fun, wasn’t it?"
        description="Now, here’s a quick question for you."
        buttonLabel="Quiz"
        onButtonClick={handleStartQuiz}
      />
    </div>
  );
};

export default NextMissionPage;
