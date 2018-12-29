import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class RemoteWOL extends Component {
  render() {
    const name = "RemoteWOL";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap">
          <img src={require("statics/img/development/remotewol/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            RemoteWOL은 전원이 꺼져 있는 PC의 전원을 원격에서 켤 수 있도록 하는 제품입니다.
            하드웨어에 정말 작은 웹서버가 구성되었고 그 안에서 동작을 관리하는 기능들을 싱글 페이지 어플리케이션으로 개발하였습니다.
          </p>
          <p>
            다수의 PC를 제어해야 하는 환경에서 주로 사용되는 서비스로,<br />
            RemoteView라는 원격 제어 서비스와 연동도 가능한 하드웨어 기반 서비스입니다.
          </p>
          <p>
            이 프로젝트는 1MB 이하로 모든 웹 리소스가 구성되어야 하였기에
            UI 모듈은 모두 자체적으로 개발하였으며, 정적 리소스(이미지, 스타일시트, JS소스)
            요청 횟수와 용량 최적화를 진행하여 개발한 프로젝트입니다.
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
              <p>서비스 UI개발 및 하드웨어와의 Interface 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>PC 관리 UI, 로그 뷰어, 하드웨어 설정 구현 등</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>HTML5, CSS3, JavaScript, jQuery</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://wol.rview.com/guide" className="button" target="_blank">Guide Site</a>
        </section>

        <section className="features-wrap">
          <h3>Features</h3>
          <dl>
            <dt>Wake on lan 가능 PC 검색</dt>
            <dd>
              <p>WOL 기능을 사용할 수 있는 PC를 탐색합니다.</p>
              <img src={require("statics/img/development/remotewol/feature-search.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>Wake on lan 실행</dt>
            <dd>
              <p>꺼져 있는 PC에 WOL 기능을 실행하고, 전원이 켜졌는지 PC의 상태를 주기적으로 확인하여 UI에 표시합니다.</p>
              <img src={require("statics/img/development/remotewol/feature-excute.png")} alt={name} />
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

export default RemoteWOL;
