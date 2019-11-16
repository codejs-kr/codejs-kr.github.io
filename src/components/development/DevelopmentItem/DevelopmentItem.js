import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImageLoader } from 'components';
import './DevelopmentItem.scss';

const DevelopmentItem = ({ title, imageURL, contentURL }) => {
  const getInnerContent = (title, imageURL) => {
    return (
      <Fragment>
        <strong>{title}</strong>
        <ImageLoader
          src={imageURL}
          alt={title}
          theme="dark"
          loader={<Loader src={require('statics/img/development/bg-ing.gif')} alt={title} />}
        />
      </Fragment>
    );
  };

  const Loader = ({ src, title }) => (
    <div className="loader">
      <span>Loading...</span>
      <img src={src} alt={title} />
    </div>
  );

  return (
    <Fragment>
      {contentURL.match('http') ? (
        // 외부 링크 게시물이 있을경우
        <a href={contentURL} className="thumbnail" title={title} target="_blank">
          {getInnerContent(title, imageURL)}
        </a>
      ) : (
        <Link to={contentURL} className="thumbnail" title={title}>
          {getInnerContent(title, imageURL)}
        </Link>
      )}
    </Fragment>
  );
};

DevelopmentItem.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  contentURL: PropTypes.string,
};

DevelopmentItem.defaultProps = {
  title: '무제',
  imageURL: require('statics/img/development/bg-ing.gif'),
  contentURL: 'http://codejs.co.kr',
};

export default DevelopmentItem;
