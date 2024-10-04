// src/components/NextMissionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NextMissionPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Navigate to the Quiz page (add your quiz page here)
    navigate("/quiz");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl mb-6">That was fun, wasn’t it?</h1>
      <p className="text-2xl mb-8 text-center">
        Now, here’s a quick question for you.
      </p>

      {/* Button to start the quiz */}
      <button
        onClick={handleStartQuiz}
        className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl"
      >
        Quiz
      </button>
    </div>
  );
};

export default NextMissionPage;
