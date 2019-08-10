import React from 'react';
import { Header, Footer } from 'components';
import './PageTemplate.scss';

const PageTemplate = ({ children, thema, isSubpage, hideFooter }) => {
  return (
    <div id="page-template" className={thema}>
      <Header isSubpage={isSubpage} />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageTemplate;
