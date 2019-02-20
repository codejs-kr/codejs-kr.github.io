import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const FrontendConvension = () => {
  const name = "FrontEnd Convension";

  return (
    <DevelopmentDetailTemplate title={`${name} ✏️`}>
      <section className="image-wrap s-cover">
        <img src={require("statics/img/development/rfc/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          2012년 초 팀 구성원들이 늘어나면서 타당한 코딩룰과
          자주 사용하는 컴포넌트들을 재사용 가능하게 만들고 싶었습니다.
          팀에서도 모두 필요성을 알지만 어디서부터 어느것까지 해야 할지 막막한 부분이 있었기 때문에
          이 부분을 당시 트위터 부트스트랩의 구조를 닮아보기로 하고 먼저 사이트 구조를 만들어 공유하였습니다.
        </p>
        <p>
          많이 사용하는 컴포넌트들의 기본형을 만들기로 시작한 프로젝트이며,
          오픈 이후 팀 프로젝트로 발전시켜서 팀 사람들과 함께 만들어낸 결과물입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2012 ~ 2013</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>사이트 기획, 구조설계, 사이트 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>사이트 개발 및 컨벤션 작성, 플러그인, 컴포넌트 다수 개발 등</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, JavaScript, jQuery</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/convention">Live</A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>플러그인</dt>
          <dd>
            <p>범용적으로 사용할 공통 UI 플러그인을 공유합니다.</p>
            <img src={require("statics/img/development/rfc/feature-plugins.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>컴포넌트</dt>
          <dd>
            <p>자주 사용되는 UI 컴포넌트도 공유합니다.</p>
            <img src={require("statics/img/development/rfc/feature-components.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>컨벤션</dt>
          <dd>
            <p>웹 접근성과 개발자 간 협업을 위한 룰을 공유합니다.</p>
            <img src={require("statics/img/development/rfc/feature-convention.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>최적화</dt>
          <dd>
            <p>웹사이트 성능을 향상시키기 위한 방법을 공유합니다.</p>
            <img src={require("statics/img/development/rfc/feature-optimization.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>초기버전</dt>
          <dd>
            <p>
              방금까지 소개한 내용은 리뉴얼 버전이며,<br />
              반응형 사이트로 개발하기 이전의 첫 번째 버전은 좀 더 날것인 상태의 모습이다.
              (<a href="http://www.codejs.co.kr/development/views/convention/preVersion/" target="_blank">Live</a>)
            </p>
            <img src={require("statics/img/development/rfc/early-version.png")} alt={name} />
          </dd>
        </dl>
      </section>

      <section className="more-wrap">
        <h3>More Projects</h3>
        <DevelopmentPagingContainer name={name} />
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default FrontendConvension;
