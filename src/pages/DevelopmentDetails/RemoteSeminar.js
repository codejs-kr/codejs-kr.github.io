import React from 'react';
import { DevelopmentDetailTemplate, A, ImageLoader } from 'components';

const RemoteSeminar = () => {
  const name = 'RemoteSeminar';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap center cover">
        <ImageLoader src={require('statics/img/development/remotemeeting/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          온라인 미팅 제품에 이어 세미나 제품을 회사에서 신규서비스로 출시를 준비중입니다.
          <br />
          WebRTC 기반으로 설계되어 기존에 제가 담당하던 리모트미팅과 구조상 유사점이 많아 제품 프로토타입 개발을
          담당하였습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2019.01 ~ 2019.08</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 프론트엔드 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>세미나 기능 개발, 화면공유, 문서공유 뷰어, Canvas 그리기도구, 채팅 개발</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>React, Redux, WebRTC, MQTT, ES6, Canvas, HTML5, CSS3, SCSS, CSS modules, WebPack</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A theme="fill" icon="flask">
          개발중
        </A>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>라운지 (룸리스트)</dt>
          <dd>
            <p>
              그룹내 개설된 회의 목록을 한눈에 볼 수 있고 간편하게 회의 개설을 할 수 있습니다.
              <br />
              Redux로 상태관리 하며, WebSocket으로 회의 상태를 실시간으로 수신하여 목록을 갱신합니다.
            </p>
            <ImageLoader src={require('statics/img/development/remotemeeting/feature-lounge.png')} alt={name} />
          </dd>
        </dl>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default RemoteSeminar;
