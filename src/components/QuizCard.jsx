import React from 'react';

const QuizCard = ({ title, question, imageSrc, options, selectedOption, onSelectOption, onSubmit }) => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}

      
      {question && <p className="text-lg mb-6">{question}</p>}

      
      {imageSrc && (
        <div className="mb-6">
          <img src={imageSrc} alt="Quiz" className="mx-auto max-h-40" />
        </div>
      )}

      
      <div className="flex flex-col space-y-4 mb-8">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-options"
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
              className="form-radio text-blue-500"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </div>

      
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizCard;
