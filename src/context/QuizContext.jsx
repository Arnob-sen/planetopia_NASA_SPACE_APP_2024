// src/context/QuizContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const QuizContext = createContext();

// Custom hook to use the QuizContext
export const useQuiz = () => useContext(QuizContext);

// Quiz provider component
export const QuizProvider = ({ children }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to update the selected answer
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <QuizContext.Provider value={{ selectedAnswer, handleAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
