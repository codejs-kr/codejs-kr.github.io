import React from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const RemoteLive = () => {
  const name = "RemoteLive";

  return (
    <DevelopmentDetailTemplate title={name}>
      <section className="image-wrap center cover">
        <img src={require("statics/img/development/remotelive/main.png")} alt={name} />
      </section>

      <section className="overview">
        <p>
          RemoteLive는 WebRTC 기반의 서비스의 가능성을 검토하기 위한 프로젝트였습니다.<br />
          현재 개발 중인 리모트미팅 프로젝트의 디딤돌이 된 프로젝트이며,
          Websocket 채팅과 P2P 기반의 화상회의 기능을 모듈화하여
          기존 회사 서비스에 적용시키는 방법을 제안한 프로젝트입니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2014</p>
          </li>
          <li>
            <strong>역할</strong>
            <p>웹 어플리케이션 설계 및 개발</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>화상회의, 채팅</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>HTML5, CSS3, WebRTC, WebSocket, JavaScript, jQuery</p>
          </li>
        </ul>
      </section>

      <section className="features-wrap">
        <h3>Features</h3>
        <dl>
          <dt>입장 대기화면</dt>
          <dd>
            <p>초대받은 링크로 들어오면 방장이 기다리고 있다고 알려줍니다.</p>
            <img src={require("statics/img/development/remotelive/feature-join.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>영상과 채팅</dt>
          <dd>
            <p>WebRTC로 연결된 화면이 보이며, 채팅도 주고 받을 수 있습니다.</p>
            <img src={require("statics/img/development/remotelive/feature-meeting.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>WebRTC에 대한 간략소개</dt>
          <dd>
            <p>2014년엔 WebRTC가 국내에 많이 사용되지 않던 시기라서 간단한 소개도 작성했습니다.</p>
            <img src={require("statics/img/development/remotelive/feature-webrtc.png")} alt={name} />
          </dd>
        </dl>
        <dl>
          <dt>자사 서비스와의 연동 제안</dt>
          <dd>
            <p>모듈화한 기능들을 자사 서비스에 연동하여 채팅 및 화상회의를 할 수 있도록 제안하였습니다.</p>
            <img src={require("statics/img/development/remotelive/feature-integration.png")} alt={name} />
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

export default RemoteLive;
