import React, { Component } from 'react';
import './DevelopmentTemplate.scss';

class DevelopmentTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

export default DevelopmentTemplate;
