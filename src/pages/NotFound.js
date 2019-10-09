import React from 'react';
import { PageTemplate, NotFoundTemplate } from 'components';

const NotFound = () => {
  return (
    <PageTemplate isSubpage>
      <NotFoundTemplate>
        <h1>404</h1>
        <p>
          찾을 수 없는 페이지입니다.
          <br />
          상단 메뉴를 눌러 이동해주세요 <span>:)</span>
        </p>
      </NotFoundTemplate>
    </PageTemplate>
  );
};

export default NotFound;
