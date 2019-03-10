import React from 'react';
import './LoadingBar.scss';

const LoadingBar = ({ isLoading }) => {
  return (
    <div id="loading-bar" className={isLoading ? 'visibllity' : ''}>
      <div className="loader" />
    </div>
  );
};

export default LoadingBar;
