import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DevelopmentItem.scss';

class DevelopmentItem extends Component {
  getInnerContent = (title, imageURL) => {
    return (
      <Fragment>
        <h2>{title}</h2>
        <img src={imageURL} alt={title} />
      </Fragment>
    )
  };

  render() {
    const { title, imageURL, contentURL, linkURL } = this.props;
    const { getInnerContent } = this;

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
  }
}

export default DevelopmentItem;
