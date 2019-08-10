import React from 'react';
import './DevelopmentListTemplate.scss';

const DevelopmentListTemplate = ({ children }) => {
  return (
    <div id="page-development" className="container">
      <h1>
        Development <span> :: Simple is Best</span>
      </h1>
      <article>{children}</article>
    </div>
  );
};

export default DevelopmentListTemplate;
