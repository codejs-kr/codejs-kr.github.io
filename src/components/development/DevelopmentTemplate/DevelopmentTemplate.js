import React, { Component } from 'react';
import './DevelopmentTemplate.scss';

class DevelopmentTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <h1>
          Development
          <span> :: Simple is Best</span>
        </h1>
        { children }
      </div>
    );
  }
}

export default DevelopmentTemplate;
