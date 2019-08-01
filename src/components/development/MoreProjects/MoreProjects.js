import React from 'react';
import { Link } from 'react-router-dom';
import { DevelopmentPagingContainer } from 'containers';

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0
  });
}

const MoreProjects = ({ currentPageName }) => {
  return (
    <section className="more-wrap">
      <h3>More Projects</h3>
      <DevelopmentPagingContainer name={currentPageName} />
      <Link to="/development" className="back-to-list" onClick={moveTop}>
        <span>←</span>Back to list
      </Link>
    </section>
  );
};

export default MoreProjects;
