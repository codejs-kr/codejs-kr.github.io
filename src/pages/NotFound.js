import React, { Component } from 'react';
import { PageTemplate, NotFoundTemplate } from 'components';

class NotFound extends Component {
  render() {
    return (
      <PageTemplate isSubpage>
        <NotFoundTemplate>
          <span>:)</span>
          <p>
            잘못된 주소입니다.<br />
            상단 메뉴를 눌러 이동해주세요.
          </p>
        </NotFoundTemplate>
      </PageTemplate>
    );
  }
}

export default NotFound;
