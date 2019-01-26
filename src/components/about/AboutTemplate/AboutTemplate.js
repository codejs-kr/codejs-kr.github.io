import React from 'react';
import './AboutTemplate.scss';

const AboutTemplate = ({ children }) => {
  return (
    <div id="page-about" className="container">
      { children }
    </div>
  );
};

export default AboutTemplate;
