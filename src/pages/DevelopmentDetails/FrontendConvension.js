import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader, RowList } from 'components';
import jobs from 'pages/data/jobs';
import utils from 'helpers/utils';

const name = '프론트엔드 컨벤션 사이트';
const data = utils.findProjectData(jobs, name);

const FrontendConvension = () => {
  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap s-cover">
        <ImageLoader src={require('statics/img/development/rfc/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          2012년 초 팀 구성원들이 증원되면서 타당한 코딩룰과 자주 사용하는 컴포넌트들을 재사용 가능하게 만들고
          싶었습니다. 팀에서도 모두 필요성을 알지만 어디서부터 어느것까지 해야 할지 막막한 부분이 있었기 때문에 이
          부분을 당시 트위터 부트스트랩의 구조를 닮아보기로 하고 먼저 사이트 구조를 만들어 공유하였습니다.
        </p>
        <p>
          Bootstrap 같은 자주 사용하는 UI 컴포넌트를 만들기로 시작한 프로젝트이며, 오픈 이후 팀 프로젝트로 발전시킬수
          있었습니다.
          <br />
          당시 팀 동료들과 함께 만들어낸 결과물입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>{data.date}</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>{data.role}</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <RowList data={data.devItems} />
          </li>
          <li>
            <strong>사용기술</strong>
            <RowList data={data.techStack} />
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/convention" theme="fill" icon="default">
          Live
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>플러그인</dt>
          <dd>
            <p>범용적으로 사용할 공통 UI 플러그인을 공유합니다.</p>
            <ImageLoader src={require('statics/img/development/rfc/feature-plugins.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>컴포넌트</dt>
          <dd>
            <p>자주 사용되는 UI 컴포넌트도 공유합니다.</p>
            <ImageLoader src={require('statics/img/development/rfc/feature-components.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>컨벤션</dt>
          <dd>
            <p>웹 접근성과 개발자 간 협업을 위한 룰을 공유합니다.</p>
            <ImageLoader src={require('statics/img/development/rfc/feature-convention.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>최적화</dt>
          <dd>
            <p>웹사이트 성능을 향상시키기 위한 방법을 공유합니다.</p>
            <ImageLoader src={require('statics/img/development/rfc/feature-optimization.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>초기버전</dt>
          <dd>
            <p>
              방금까지 소개한 내용은 리뉴얼 버전이며,
              <br />
              반응형 사이트로 개발하기 이전의 첫 번째 버전은 좀 더 날것인 상태의 모습이다. (
              <a href="http://www.codejs.co.kr/development/views/convention/preVersion/" target="_blank">
                Live
              </a>
              )
            </p>
            <ImageLoader src={require('statics/img/development/rfc/early-version.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default FrontendConvension;
