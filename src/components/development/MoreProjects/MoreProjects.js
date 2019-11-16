import React from 'react';
import { Link } from 'react-router-dom';
import { DevelopmentPagingContainer } from 'containers';
import utils from 'helpers/utils';

const MoreProjects = ({ currentPageName }) => {
  return (
    <section className="more-wrap">
      <h3>More Projects</h3>
      <DevelopmentPagingContainer name={currentPageName} />
      <Link to="/development" className="back-to-list" onClick={utils.moveTop}>
        <i className="fas fa-angle-left" />
        Back to list
      </Link>
    </section>
  );
};

export default MoreProjects;
