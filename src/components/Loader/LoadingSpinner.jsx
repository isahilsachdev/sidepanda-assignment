import React from 'react';
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">Searching for available slots...</div>
    </div>
  );
};

export default LoadingSpinner;
