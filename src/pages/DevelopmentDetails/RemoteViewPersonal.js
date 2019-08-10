import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const RemoteViewPersonal = () => {
  const name = 'RemoteView Personal';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap center s-contain">
        <img src={require('statics/img/development/remoteview/personal/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          개인 사용자들을 위한 PC원격제어 서비스인 리모트뷰는 제가 담당할 당시 이전 버전 서비스를 완전히 리뉴얼하는
          프로젝트였으며, 저의 프론트앤드 개발의 씨앗이 되어준 의미 있는 프로젝트입니다.
        </p>
        <p>
          회사의 주력 제품이며 재택근무를 가능하게 해주는 유용한 서비스입니다.
          <br />
          원격지에 설치된 PC의 목록이 노출되며, 해당 PC에 접속하면 전용 뷰어가 나타나며 뷰어를 통해서 원격지의 PC를
          제어할 수 있습니다.
        </p>
        <p>현재는 기업용 서비스와 통합되었습니다.</p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2010 ~ 2013</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 어플리케이션 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>컴퓨터관리, 리포팅 등 브랜드, 어드민 사이트 포함한 전체 기능 및 UI 개발 담당</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, JavaScript, jQuery, jQuery mobile, flot.js</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://rview.com" theme="fill" icon="default">
          Live
        </A>
        <A href="http://www.codejs.co.kr/development/views/m-rview" theme="fill" icon="default">
          Mobile
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>원격지 PC관리 (아이콘뷰)</dt>
          <dd>
            <p>원격지에 설치된 PC의 목록이 노출되며, 대상 PC를 원격제어하거나 신규로 관리할 PC를 추가할 수 있습니다.</p>
            <img src={require('statics/img/development/remoteview/personal/feature-pc-icon.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>원격지 PC관리 (리스트뷰)</dt>
          <dd>
            <p>아이콘뷰와 같은 DOM을 CSS만 변경하여 리스트뷰를 만들어 복잡한 렌더링을 최소화하였습니다.</p>
            <img src={require('statics/img/development/remoteview/personal/feature-pc-list.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>리포트</dt>
          <dd>
            <p>통계 / 사용 내역 / 결제 내역을 한 화면에서 손쉽게 볼 수 있습니다.</p>
            <img src={require('statics/img/development/remoteview/personal/feature-stats.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>내 정보 관리</dt>
          <dd>
            <p>로그인 후 정보를 수정하기 위한 기능도 개발하였습니다.</p>
            <img src={require('statics/img/development/remoteview/personal/feature-setting.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>어드민 사이트</dt>
          <dd>
            <p>
              어드민 사이트는 반복되는 유형이 많기 때문에 템플릿화 하여 개발하였습니다.
              <br />
              다른 개발자분들도 동일한 규칙으로 작업할 수 있도록 별도 페이지를 구성하여 운영했습니다.
            </p>
            <img src={require('statics/img/development/remoteview/admin/feature-admin-temp1.png')} alt={name} />
            <img src={require('statics/img/development/remoteview/admin/feature-admin-temp2.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteViewPersonal;
