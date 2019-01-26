import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DevelopmentItem.scss';

const DevelopmentItem = ({ title, imageURL, contentURL, linkURL }) => {
  const getInnerContent = (title, imageURL) => {
    return (
      <Fragment>
        <strong>{title}</strong>
        <img src={imageURL} alt={title} />
      </Fragment>
    )
  };

  return (
    <Fragment>
      {
        contentURL.match('http') ? (
          <a href={contentURL} className="thumbnail" title={title} target="_blank">
            {getInnerContent(title, imageURL)}
          </a>
        ) : (
          <Link to={contentURL} className="thumbnail" title={title}>
            {getInnerContent(title, imageURL)}
          </Link>
        )
      }
    </Fragment>
  );
};

export default DevelopmentItem;
