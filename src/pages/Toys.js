import React from 'react';
import { PageTemplate, ToysTemplate } from 'components';
import { ToyItemContainer } from 'containers';

const Toys = () => {
  return (
    <PageTemplate thema="purple" hideFooter>
      <ToysTemplate>
        <article>
          <div className="inner-container">
            <strong>진행 중인 토이프로젝트</strong>
            <ToyItemContainer />
          </div>
        </article>
      </ToysTemplate>
    </PageTemplate>
  );
};

export default Toys;
