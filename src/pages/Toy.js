import React from 'react';
import { PageTemplate, ToyTemplate } from 'components';
import { ToyItemContainer } from 'containers';

const Toy = () => {
  return (
    <PageTemplate thema="purple" hideFooter>
      <ToyTemplate>
        <article>
          <div className="inner-container">
            <strong>진행 중인 토이프로젝트</strong>
            <ToyItemContainer />
          </div>
        </article>
      </ToyTemplate>
    </PageTemplate>
  );
};

export default Toy;
