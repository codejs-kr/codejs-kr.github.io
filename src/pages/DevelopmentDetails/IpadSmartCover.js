import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';

const IpadSmartCover = () => {
  const name = 'iPad Smart Cover';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap center contain">
        <img src={require('statics/img/development/ipad-smart-cover/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          2012년 3월 8일 New iPad 발표 후 애플 사이트 둘러보다 재밌는 cover 에니메이션을 발견하여 제작해보았습니다.
          <br />
          마우스 드래그 액션으로 아이패드 커버를 디테일하게 표현한 부분이 매력적입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2012</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>UI 구현</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, jQuery grab</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/ipad/" theme="fill" icon="default">
          Live
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default IpadSmartCover;
