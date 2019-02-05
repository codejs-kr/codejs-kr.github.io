import React  from 'react';
import './DevelopmentDetailTemplate.scss';
import { TopButton } from 'components';

const DevelopmentDetailTemplate = ({ children, title }) => {
  return (
    <div id="page-detail-template" className="container">
      <h1>{title}</h1>
      <article>
        {children}
        <TopButton />
      </article>
    </div>
  );
};

export default DevelopmentDetailTemplate;
