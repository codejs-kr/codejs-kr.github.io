import React, { Component } from 'react';
import { Header, Footer } from 'components';
import './PageTemplate.scss';

class PageTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="page-template">
        <Header />
        { children }
        <Footer />
      </div>
    );
  }
}

export default PageTemplate;
