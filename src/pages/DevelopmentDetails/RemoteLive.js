import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class RemoteLive extends Component {
  render() {
    const name = "RemoteLive";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap x-center">
          <img src={require("statics/img/development/remotelive/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            RemoteLive는 WebRTC 기반의 서비스의 가능성을 검토하기 위한 프로젝트였습니다.<br />
            현재 개발중인 리모트미팅 프로젝트의 디딤돌이된 프로젝트이며,
            채팅을 동반한 P2P기반의 화상회의를 모듈화하여 기존 회사 서비스에 적용시키는 방법을 제안하였습니다.
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
              <p>HTML5, CSS3, WebSocket, Javascript, jQuery</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://remotemeeting.com" className="button" target="_blank">Live</a>
        </section>

        <section className="features-wrap">
          <h3>Features</h3>
          <dl>
            <dt>title</dt>
            <dd>
              <p>something...</p>
              <img src={require("statics/img/development/remotelive/feature-join.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>title</dt>
            <dd>
              <p>something...</p>
              <img src={require("statics/img/development/remotelive/feature-meeting.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>title</dt>
            <dd>
              <p>something...</p>
              <img src={require("statics/img/development/remotelive/feature-webrtc.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>title</dt>
            <dd>
              <p>something...</p>
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
  }
}

export default RemoteLive;
