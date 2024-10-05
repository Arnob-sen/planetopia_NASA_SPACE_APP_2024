import React, { useState } from 'react';
import QuizCard from './QuizCard'; // Your QuizCard component
import { useNavigate } from 'react-router-dom';
import quizImage from '../assets/graph.png'; // Replace with your image path

const Second_Quiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    
    const isCorrect = selectedOption === '9 years';
    navigate('/second-result', { state: { isCorrect } });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-space-lab2 text-white">
      <QuizCard
        title="Question"
        question="What is this planet's orbital period?"
        imageSrc={quizImage} 
        options={['6 years', '9 years', '12 years']}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        onSubmit={handleSubmit} // Submits the answer
      />
    </div>
  );
};

export default Second_Quiz;
