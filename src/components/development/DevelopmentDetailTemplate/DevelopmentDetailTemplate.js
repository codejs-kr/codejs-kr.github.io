import React  from 'react';
import './DevelopmentDetailTemplate.scss';

const DevelopmentDetailTemplate = ({ children, title }) => {
  return (
    <div id="detail-template" className="container">
      <h1>{ title }</h1>
      <article>
        { children }
      </article>
    </div>
  );
};

export default DevelopmentDetailTemplate;
