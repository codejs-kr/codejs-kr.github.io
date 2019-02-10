import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './DevelopmentItem.scss';

const DevelopmentItem = ({ title, imageURL, contentURL }) => {
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

DevelopmentItem.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  contentURL: PropTypes.string
};

DevelopmentItem.defaultProps = {
  title: '무제',
  imageURL: require("statics/img/development/bg-ing.gif"),
  contentURL: 'http://codejs.co.kr'
};

export default DevelopmentItem;
