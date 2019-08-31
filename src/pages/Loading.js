import React from 'react';
import { PageTemplate, NotFoundTemplate } from 'components';

const Loading = () => {
  return (
    <PageTemplate>
      <NotFoundTemplate>
        <p>Loading...</p>
      </NotFoundTemplate>
    </PageTemplate>
  );
};

export default Loading;
