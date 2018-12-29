import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class RemoteViewBusiness extends Component {
  render() {
    const name = "RemoteView Business";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap x-center">
          <img src={require("statics/img/development/remoteview/ent/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            리모트뷰 기업용은 선임자에게 오픈전에 인수인계 받아서
            마무리 개발과 약 3년간의 운영 이슈를 개발한 프로젝트입니다.
          </p>
          <p>
            회사의 주력 제품이며 재택근무를 가능하게 해주는 유용한 서비스 입니다.<br />
            원격지에 설치된 PC의 목록이 노출되며, 해당 PC에 접속하면 전용 뷰어가 나타나며
            뷰어를 통해서 원격지의 PC를 제어 할 수 있습니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2011 ~ 2014</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 유지보수 및 기능 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>UI 렌더러, 다이얼로그, 컨텍스트메뉴, 드레그 액션, 기능별 CRUD 비동기 로직 개발 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>HTML5, CSS3, JavaScript, jQuery, flot.js</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="http://rview.com" className="button" target="_blank">Live</a>
        </section>

        <section className="features-wrap">
          <h3>Features</h3>
          <dl>
            <dt>원격지 PC관리</dt>
            <dd>
              <p>원격지에 설치된 PC의 목록이 노출되며, 대상 PC에 접속하여 원격제어를 할 수 있습니다.</p>
              <img src={require("statics/img/development/remoteview/ent/feature-pc.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>라이브뷰</dt>
            <dd>
              <p>PC의 화면 이미지를 주기적으로 갱신하여 현재 원격지 PC 화면을 확인 할 수 있습니다.</p>
              <img src={require("statics/img/development/remoteview/ent/feature-live.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>사용자관리</dt>
            <dd>
              <p>관리자 / 매니저 / 일반유저 등급으로 나누어 유저를 등록하고 PC와 그룹에 권한을 부여하여 관리 할 수 있습니다.</p>
              <img src={require("statics/img/development/remoteview/ent/feature-user.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>통계</dt>
            <dd>
              <p>접속자의 권한별로 사용한 PC의 접근내역과 통계를 볼 수 있습니다.</p>
              <img src={require("statics/img/development/remoteview/ent/feature-user.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>환경설정</dt>
            <dd>
              <p>다양한 옵션을 단을 명확하게 나누어 직관적인 UI로 배치하도록 개발하였습니다.</p>
              <img src={require("statics/img/development/remoteview/ent/feature-setting.png")} alt={name} />
            </dd>
          </dl>
        </section>

        <section className="more-wrap">
          <h3>More Projects</h3>
          <DevelopmentPagingContainer name={name} />
        </section>
      </DevelopmentDetailTemplate>
    );
  }
}

export default RemoteViewBusiness;
