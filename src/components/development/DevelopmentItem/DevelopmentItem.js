import React, { Component } from 'react';
import './DevelopmentItem.scss';

class DevelopmentItem extends Component {
  render() {
    const { title, imageURL, contentURL } = this.props;

    return (
      <a href="#" className="thumbnail">
        <h2>{title}</h2>
        <img src={imageURL} alt={title} />
      </a>
    );
  }
}

export default DevelopmentItem;
