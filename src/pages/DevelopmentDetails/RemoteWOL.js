import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';

const RemoteWOL = () => {
  const name = 'RemoteWOL';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap contain x-right">
        <img src={require('statics/img/development/remotewol/main.jpg')} alt={name} />
      </section>

      <section className="overview">
        <p>
          RemoteWOL은 전원이 꺼져 있는 PC의 전원을 원격에서 켤 수 있도록 하는 제품입니다. WOL 기능을 지원하는 하드웨어에
          작은 Goahead 웹서버가 구성되었고 그 내부에서 하드웨어 동작을 제어 & 관리하는 싱글 페이지 어플리케이션을
          개발하였습니다.
        </p>
        <p>
          다수의 PC를 제어하는 환경에서 사용되는 서비스로 RemoteView라는 원격 제어 서비스와 연동해서 전원 제어까지
          가능한 하드웨어 기반 서비스입니다.
        </p>
        <p>
          이 프로젝트는 1MB이하로 모든 웹 리소스가 구성되어야 했기 때문에 UI 모듈은 모두 자체적으로 개발하였으며, <br />
          정적 리소스(Image, CSS, JS) 요청 횟수와 용량 최적화를 보다 신경써서 개발한 프로젝트입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2013.02 ~ 2014.03</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 프론트엔드 개발, 하드웨어간 Interface 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>관리 UI, 하드웨어 설정 구현 등</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, JavaScript, jQuery, Gulp</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="https://wol.rview.com/guide" theme="fill" icon="default">
          Guide Site
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>네트워크 테스트</dt>
          <dd>
            <p>WOL 장비가 네트웍에 정상적으로 연결됬는지 확인합니다.</p>
            <img src={require('statics/img/development/remotewol/feature-network.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>PC 탐색</dt>
          <dd>
            <p>동일 네트웍에 WOL(Wake on lan) 기능이 가능한 PC를 탐색 합니다.</p>
            <img src={require('statics/img/development/remotewol/feature-pc-on1.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>PC 전원켜기</dt>
          <dd>
            <p>
              전원 Off PC에 WOL 명령으로 PC의 전원을 켤 수 있습니다.
              <br />
              WOL 명령 후 전원이 켜졌는지 PC의 상태를 주기적으로 확인하여 UI에 표시합니다.
            </p>
            <img src={require('statics/img/development/remotewol/feature-pc-on2.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>RemoteView 서비스와 연동</dt>
          <dd>
            <p>RemoteView 서비스에 연동하여 사용할 수 있습니다.</p>
            <img src={require('statics/img/development/remotewol/feature-rv-connect.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>RemoteView 서비스에서 관리</dt>
          <dd>
            <p>
              RemoteView에 연동하면 WOL장비 에이전트가 노출되며 전체 전원 켜기 또는 개별로 PC 전원을 켤 수 있습니다.
            </p>
            <img src={require('statics/img/development/remotewol/feature-rv-pc-on.png')} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>시스템 사용 로그</dt>
          <dd>
            <p>장비 사용 이력을 확인 할 수 있습니다.</p>
            <img src={require('statics/img/development/remotewol/feature-log.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteWOL;
