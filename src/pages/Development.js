import React from 'react';
import { PageTemplate, DevelopmentListTemplate } from 'components';
import { DevelopmentItemContainer } from "containers";

const Development = () => {
  return (
    <PageTemplate>
      <DevelopmentListTemplate>
        <DevelopmentItemContainer />
      </DevelopmentListTemplate>
    </PageTemplate>
  );
};

export default Development;