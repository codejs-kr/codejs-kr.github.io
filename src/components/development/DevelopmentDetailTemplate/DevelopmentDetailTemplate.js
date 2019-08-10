import React from 'react';
import './DevelopmentDetailTemplate.scss';
import { TopButton, MoreProjects } from 'components';

const DevelopmentDetailTemplate = ({ children, title }) => {
  return (
    <div id="page-detail-template" className="container">
      <h1>{title}</h1>
      <article>
        {children}
        <MoreProjects currentPageName={title} />
        <TopButton />
      </article>
    </div>
  );
};

export default DevelopmentDetailTemplate;
