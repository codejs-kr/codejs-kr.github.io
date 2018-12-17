import React, { Component } from 'react';
import { DevelopmentDetailTemplate } from 'components';
import { DevelopmentPagingContainer } from 'containers';

class RemoteMeeting extends Component {
  render() {
    const name = "RemoteMeeting";

    return (
      <DevelopmentDetailTemplate title={name}>
        <section className="image-wrap center">
          <img src={require("statics/img/development/remotemeeting/main.png")} alt={name} />
        </section>

        <section className="overview">
          <p>
            리모트미팅은 WebRTC 기반으로 만들어진 온라인 화상회의 서비스입니다.<br />
            제가 다니는 회사는 컴퓨터를 제어하는 서비스가 주를 이루웠으며 저 또한 관련 서비스를 오랜 시간 개발했습니다.
          </p>
          <p>
            하지만, 저는 컴퓨터를 제어하는 서비스보다 사람간의 커뮤니케이션 도구를 개발하고 싶다는 생각을 많이 하였고,
            2014년 WebRTC 기술을 알게 된 후 관련 단위 프로젝트를 주도 한 것을 시작으로 리모트미팅 프로젝트의 시작을 함께 할 수 있었습니다.
          </p>
          <p>
            리모트미팅은 Web, iOS, Android, 전용 하드웨어 Box와 상호 연결 됩니다.
          </p>
        </section>

        <section className="list-wrap">
          <ul>
            <li>
              <strong>개발년도</strong>
              <p>2014 ~ 현재</p>
            </li>
            <li>
              <strong>역할</strong>
              <p>웹 어플리케이션 설계 및 개발</p>
            </li>
            <li>
              <strong>주요개발항목</strong>
              <p>화상회의, 화면공유, 문서공유 뷰어, 그리기도구, 채팅, 캡쳐, SDK 등 회의 전체 기능 개발 (라운지, 캘린더)</p>
            </li>
            <li>
              <strong>사용기술</strong>
              <p>HTML5, MQTT (WebSocket), Javascript, jQuery, React, SCSS, WebPack, Gulp</p>
            </li>
          </ul>
        </section>

        <section className="button-wrap">
          <a href="https://remotemeeting.com" className="button" target="_blank">Live</a>
        </section>

        <section className="features-wrap">
          <h3>Features</h3>
          <dl>
            <dt>화상회의</dt>
            <dd>
              <p>상황에 따라 P2P와 AMS 연결 방식으로 전환하며 최대 14인 까지 연결됩니다.</p>
              <img src={require("statics/img/development/remotemeeting/main.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>화면공유</dt>
            <dd>
              <p>화면공유와 스크린샷 확장프로그램을 개발 하였으며, Screen Share API를 사용하여 회의 중 내 PC 화면을 공유 할 수 있습니다.</p>
              <img src={require("statics/img/development/remotemeeting/main.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>문서공유</dt>
            <dd>
              <p>뷰어와 그리기 도구는 자체 개발 하였으며, 다양한 문서 포멧을 지원하기 위해 Third party 문서 변환기를 사용하고 있습니다.</p>
              <img src={require("statics/img/development/remotemeeting/feature-presentation.png")} alt={name} />
            </dd>
          </dl>
          <dl>
            <dt>채팅</dt>
            <dd>
              <p>Timeline 인터페이스로 채팅과 상태 메시지가 기록 됩니다.</p>
              <img src={require("statics/img/development/remotemeeting/main.png")} alt={name} />
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

export default RemoteMeeting;
