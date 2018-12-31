import React, { Component } from 'react';
import './AboutTemplate.scss';

class AboutTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="page-about" className="container">
        { children }
      </div>
    );
  }
}

export default AboutTemplate;
