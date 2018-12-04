import React, { Component } from 'react';
import './DevelopmentDetailTemplate.scss';

class DevelopmentDetailTemplate extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <div id="detail-template" className="container">
        <h1>{title}</h1>
        <article>
          { children }
        </article>
      </div>
    );
  }
}

export default DevelopmentDetailTemplate;
