import React from 'react';
import { Header, Footer } from 'components';
import './PageTemplate.scss';

const PageTemplate = ({ children, thema, isSubpage }) => {
  return (
    <div id="page-template" className={thema}>
      <Header isSubpage={isSubpage} />
      { children }
      <Footer />
    </div>
  );
};

export default PageTemplate;
