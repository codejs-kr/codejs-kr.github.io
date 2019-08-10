import React from 'react';
import './ToyTemplate.scss';

const ToyTemplate = ({ children }) => {
  return (
    <div id="page-toy" className="container">
      {children}
    </div>
  );
};

export default ToyTemplate;
