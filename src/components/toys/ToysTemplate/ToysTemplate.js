import React from 'react';
import './ToysTemplate.scss';

const ToysTemplate = ({ children }) => {
  return (
    <div id="page-toys" className="container">
      { children }
    </div>
  );
};

export default ToysTemplate;
