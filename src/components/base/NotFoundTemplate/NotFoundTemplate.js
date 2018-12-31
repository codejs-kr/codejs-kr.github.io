import React, { Component } from 'react';
import './NotFoundTemplate.scss';

class NotFoundTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="page-notfound" className="container">
        { children }
      </div>
    );
  }
}

export default NotFoundTemplate;
