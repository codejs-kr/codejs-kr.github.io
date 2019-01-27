import React from 'react';
import { PageTemplate, DevelopmentTemplate } from 'components';
import { DevelopmentItemContainer } from "containers";

const Development = () => {
  return (
    <PageTemplate>
      <DevelopmentTemplate>
        <DevelopmentItemContainer />
      </DevelopmentTemplate>
    </PageTemplate>
  );
};

export default Development;