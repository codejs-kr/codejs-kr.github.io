import React from 'react';
import './NotFoundTemplate.scss';

const NotFoundTemplate = ({ children }) => {
  return (
    <div id="page-notfound" className="container">
      { children }
    </div>
  );
};

export default NotFoundTemplate;
