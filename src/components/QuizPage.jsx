import React, { useState } from 'react';
import QuizCard from './QuizCard'; // Your QuizCard component
import { useNavigate } from 'react-router-dom';
import quizImage from '../assets/Graph1.png'; // Replace with your image path

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    
    const isCorrect = selectedOption === 'medium';
    navigate('/result', { state: { isCorrect } });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-space-lab2 text-white">
      <QuizCard
        title="Question"
        question="Calculate the planet's size using the light curve"
        imageSrc={quizImage} 
        options={['small', 'medium', 'big']}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        onSubmit={handleSubmit} // Submits the answer
      />
    </div>
  );
};

export default QuizPage;
