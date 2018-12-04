import React, { Component } from 'react';
import { Header, Footer } from 'components';
import './PageTemplate.scss';

class PageTemplate extends Component {
  render() {
    const { children, thema } = this.props;

    return (
      <div id="page-template" className={thema}>
        <Header />
        { children }
        <Footer />
      </div>
    );
  }
}

export default PageTemplate;
