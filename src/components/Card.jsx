// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, buttonLabel, onButtonClick,secondaryButtonLabel,
    onSecondaryButtonClick,inputField, inputValue, onInputChange }) => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
      
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}

      
      {description && <p className="text-lg mb-6">{description}</p>}
      {inputField && (
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter your name"
          className="text-black p-2 mb-6 w-full rounded-lg"
        />
      )}

      
      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {buttonLabel}
        </button>
      )}
      <div className='m-4'>
      {secondaryButtonLabel && (
          <button
            onClick={onSecondaryButtonClick}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            {secondaryButtonLabel}
          </button>
        )}
        </div>
    </div>
  );
};

export default Card;
